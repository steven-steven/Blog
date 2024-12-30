// assets/javascripts/application.js

import { Application } from "@hotwired/stimulus"

window.Stimulus = Application.start()

import DarkToggleController from "./dark_toggle_controller"
Stimulus.register("dark-toggle", DarkToggleController)

import SubscriptionController from "./subscription_controller"
Stimulus.register("subscription", SubscriptionController)

import TagController from "./tag_controller"
Stimulus.register("tag", TagController)
