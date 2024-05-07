import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static app_script_url = "https://script.google.com/macros/s/AKfycbzE07u9lEiNg3Pj_r0LXH1xiD39JYEHC7xo2kEwRG5CKOccaULNY0eG6XYgHaoCim91/exec";
  static targets = ["successTemplate", "failTemplate", "loading", "email"]
  static values = {
    function: String
  }

  connect() {
    if(this.functionValue == "subscribe"){
      const token = this.getQueryParam("token")
      if(!token || token == ""){ return this.redirect404() };
      const url = `${this.constructor.app_script_url}?token=${token}&p=confirm-subscribe`;
      this.showResponse(url)
    } else if (this.functionValue == "unsubscribe"){
      const token = this.getQueryParam("token")
      if(!token || token == ""){ return this.redirect404() };
      const url = `${this.constructor.app_script_url}?token=${token}&p=confirm-unsubscribe`;
      this.showResponse(url)
    } else if (this.functionValue == "new"){
      const email = this.getQueryParam("email")
      if(!email || email == ""){ return this.redirect404() };
      const url = `${this.constructor.app_script_url}?p=subscribe&email=${email}`;
      this.showResponse(url)
    }
  }

  redirect404() {
    window.location.href = `/404`;
  }

  getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }

  submitForm() {
    const email = this.emailTarget.value;

    window.location.href = `/subscription/pending?email=${encodeURIComponent(email)}`;
  }

  async showResponse(url) {
    if(!url) return false
    const response = await this.postRequest(url);
    let template = response ? this.successTemplateTarget : this.failTemplateTarget
    let clon = template.content.cloneNode(true);
    this.element.appendChild(clon);
    this.loadingTarget.classList.add('hidden')
  }

  async postRequest(url) {
    try{
      let result = await fetch(url)
      result = await result.json()
      return result["success"]
    } catch{
      console.error('There was a problem with your fetch operation:', error);
      return false
    }
  }
}
