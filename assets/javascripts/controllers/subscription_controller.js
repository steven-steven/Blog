import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static app_script_url = "https://script.google.com/macros/s/AKfycbxdKymGNp2EfskR5m63GU07UptkeSuA3_EmswwdEQNytm-unsszNJWh53z4xjcleZKH/exec";
  static targets = ["successTemplate", "failTemplate", "loading", "email"]
  static values = {
    token: String,
    function: String,
    email: String
  }

  connect() {
    if(this.functionValue == "subscribe"){
      if(this.tokenValue == "") return false
      const url = `${this.constructor.app_script_url}?token=${this.tokenValue}&p=confirm-subscribe`;
      this.showResponse(url)
    } else if (this.functionValue == "unsubscribe"){
      if(this.tokenValue == "") return false
      const url = `${this.constructor.app_script_url}?token=${this.tokenValue}&p=confirm-unsubscribe`;
      this.showResponse(url)
    } else if (this.functionValue == "new"){
      if(this.emailValue == "") return false
      const url = `${this.constructor.app_script_url}?p=subscribe&email=${this.emailValue}`;
      this.showResponse(url)
    }
  }

  submitForm() {
    const email = this.emailTarget.value;

    window.location.href = `http://127.0.0.1:8080/subscription/pending?email=${encodeURIComponent(email)}`;
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
