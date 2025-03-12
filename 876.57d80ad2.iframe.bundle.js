"use strict";(self.webpackChunkreact_cloudbox_alerts=self.webpackChunkreact_cloudbox_alerts||[]).push([[876],{"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/Alert/Alert.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* Base alert styling */\n.dwBZ9HYCSh3B_5ygCDHI {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  display: flex;\n  align-items: flex-start;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n}\n\n/* Icon container */\n.W4CKEcqX0F5LFrGU3hxn {\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 1.25rem;\n  flex-shrink: 0; /* Prevent icon from shrinking */\n  width: 1.5rem; /* Consistent width for alignment */\n  justify-content: center; /* Center icon */\n}\n\n/* Make sure icons within the alert icon container maintain proper sizing */\n.W4CKEcqX0F5LFrGU3hxn i {\n  font-size: inherit;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5rem; /* Consistent height */\n  width: 1.5rem; /* Consistent width */\n}\n\n/* Content area */\n.pUmH2kmdw2tVwbDNewai {\n  flex: 1;\n  margin-right: 1rem;\n  padding-top: 0.125rem; /* Slight padding to align with icon */\n}\n\n/* Close button */\n.LQpyTz3WifQeiOGndIQi {\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  height: 1.5rem; /* Consistent height */\n  width: 1.5rem; /* Consistent width */\n  flex-shrink: 0; /* Prevent button from shrinking */\n}\n\n.LQpyTz3WifQeiOGndIQi:hover {\n  opacity: 1;\n}\n\n.LQpyTz3WifQeiOGndIQi:focus {\n  outline: none;\n  opacity: 1;\n}\n\n/* Custom styles for Font Awesome icons */\n.dwBZ9HYCSh3B_5ygCDHI i.VuAaU9SeoEC_b7EKXVDK,\n.dwBZ9HYCSh3B_5ygCDHI i.Iq2CpU3F4mC5uHwku55J,\n.dwBZ9HYCSh3B_5ygCDHI i.hXvi2AldW0Ab_M5U7y6S,\n.dwBZ9HYCSh3B_5ygCDHI i.cdpLuzQ6Jyij8KSlJQoZ {\n  /* Ensure Font Awesome icons are sized correctly */\n  text-align: center;\n  vertical-align: middle;\n}\n\n/* Custom styles for Remix icons */\n.dwBZ9HYCSh3B_5ygCDHI i.mZFAFqsWlYFKaj8dw2Tm {\n  /* Ensure Remix icons are sized correctly */\n  vertical-align: middle;\n}\n\n/* Alert variants */\n.deYAPKQLQGxVlBTYHJ9G {\n  color: #6065f2;\n  background-color: rgba(198, 200, 247, 0.1);\n  border-color: #6065f2;\n}\n\n.Qe_EksMLSRlzrQa1QE29 {\n  color: #545b62;\n  background-color: rgba(204, 206, 210, 0.1);\n  border-color: #545b62;\n}\n\n.TSWmmGpwo0K_bBsJdGA6 {\n  color: #57d25f;\n  background-color: rgba(183, 225, 186, 0.1);\n  border-color: #57d25f;\n}\n\n.l81NMv_wBfaqsx5nr9Hw {\n  color: #e873a9;\n  background-color: rgba(255, 218, 235, 0.1);\n  border-color: #e873a9;\n}\n\n.LyjWa8e1Rpo7qAlf0qib {\n  color: #f8c432;\n  background-color: rgba(255, 235, 223, 0.1);\n  border-color: #f8c432;\n}\n\n.GrTKHVptPF0_w1naEi7e {\n  color: #fa9674;\n  background-color: rgba(255, 230, 222, 0.1);\n  border-color: #fa9674;\n}\n\n.CZ6XV20V8YfvGrTIwTXw {\n  color: #545b62;\n  background-color: rgba(250, 250, 250, 0.1);\n  border-color: #545b62;\n}\n\n/* Background variants */\n.DwGEilhdoZ7La2tkNad2 {\n  color: white;\n  background-color: #6065f2;\n  border-color: #6065f2;\n}\n\n.fWvDXV2graLXKrdiTkBC {\n  color: white;\n  background-color: #545b62;\n  border-color: #545b62;\n}\n\n.HfjqnvVyxjcanA_WY5DJ {\n  color: white;\n  background-color: #57d25f;\n  border-color: #57d25f;\n}\n\n.zTN3ccL_fAKCAnwCJm14 {\n  color: white;\n  background-color: #e873a9;\n  border-color: #e873a9;\n}\n\n.Q7ghLEMybezkqXcclqDd {\n  color: #212529;\n  background-color: #f8c432;\n  border-color: #f8c432;\n}\n\n.BLAUynu4cnkN7CjzdKIw {\n  color: white;\n  background-color: #fa9674;\n  border-color: #fa9674;\n}\n\n.AJih_0ZrKAPr8VYS8nbd {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n/* Animation variants */\n.Pr3653jBDCwyVdyq7fqE.cw9SoELGvLz8KpV1E2Dy {\n  opacity: 0;\n  animation: mgzaYu4B32d_aS32fY1V 0.3s forwards;\n}\n\n.Pr3653jBDCwyVdyq7fqE.E2PSQR9g7ROrFTHMQPNY {\n  animation: nDdsouKz1mLh_oKU0Rz2 0.3s forwards;\n}\n\n.XhueFEoMq2iNObF3MUjl.cw9SoELGvLz8KpV1E2Dy {\n  opacity: 0;\n  transform: translateY(20px);\n  animation: JYOjcBpZNBuqNy35ls9e 0.3s forwards;\n}\n\n.XhueFEoMq2iNObF3MUjl.E2PSQR9g7ROrFTHMQPNY {\n  animation: FiZdssCEDHqqsxmsd0IB 0.3s forwards;\n}\n\n.dHesoJuxfK6VBaizW_lv.cw9SoELGvLz8KpV1E2Dy {\n  opacity: 0;\n  transform: translateY(20px);\n  animation: JYOjcBpZNBuqNy35ls9e 0.3s forwards;\n}\n\n.dHesoJuxfK6VBaizW_lv.E2PSQR9g7ROrFTHMQPNY {\n  animation: FiZdssCEDHqqsxmsd0IB 0.3s forwards;\n}\n\n.zkdZe4pBpIumpyAY03Im.cw9SoELGvLz8KpV1E2Dy {\n  opacity: 0;\n  transform: translateY(-20px);\n  animation: bVcVqiwTCku36eUL1A0Y 0.3s forwards;\n}\n\n.zkdZe4pBpIumpyAY03Im.E2PSQR9g7ROrFTHMQPNY {\n  animation: gYGVF3J5BcPa_Pu1v10K 0.3s forwards;\n}\n\n.wpJRYUrfPtsRMcIGtpsB.cw9SoELGvLz8KpV1E2Dy {\n  opacity: 0;\n  transform: translateX(20px);\n  animation: cB5wZjItt0pVxLEZalbq 0.3s forwards;\n}\n\n.wpJRYUrfPtsRMcIGtpsB.E2PSQR9g7ROrFTHMQPNY {\n  animation: ZduosBgkZSX6HmjUtNkw 0.3s forwards;\n}\n\n.NaG0Zdby7MsrlT5KGp13.cw9SoELGvLz8KpV1E2Dy {\n  opacity: 0;\n  transform: translateX(-20px);\n  animation: lJaHh9EYVMGUV0LVBrZg 0.3s forwards;\n}\n\n.NaG0Zdby7MsrlT5KGp13.E2PSQR9g7ROrFTHMQPNY {\n  animation: VCQ4OkbwvZVipVcK7c7W 0.3s forwards;\n}\n\n.dxwTlVuue3vkd5rXjcLS.cw9SoELGvLz8KpV1E2Dy {\n  opacity: 0;\n  transform: scale(0.5);\n  animation: DtfJzsxZQDSN6NwAwZ5M 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.dxwTlVuue3vkd5rXjcLS.E2PSQR9g7ROrFTHMQPNY {\n  animation: fEqd8smvFID8_LkU4GA3 0.3s forwards;\n}\n\n.DPGMp3l53SKa4ZNXUhwV.cw9SoELGvLz8KpV1E2Dy {\n  opacity: 0;\n  transform: scale(0.9);\n  animation: N58l1dLOWpOVKgKoyTml 0.3s forwards;\n}\n\n.DPGMp3l53SKa4ZNXUhwV.E2PSQR9g7ROrFTHMQPNY {\n  animation: H6dNb7Dwj3xvork0HfpO 0.3s forwards;\n}\n\n/* Position variants - used for animation directions */\n.wsKWJBw5fI85bSngcHF_ {\n  transform-origin: top center;\n}\n\n.d5uX6aVaKj4n3toFr2Pp {\n  transform-origin: bottom center;\n}\n\n.DV_zjZtD9qv6peH0NyXg {\n  transform-origin: left center;\n}\n\n.b5tPQy7qaDSQ2zNUI4Dv {\n  transform-origin: right center;\n}\n\n.jqrgq8XFNjDizrCbXThy {\n  transform-origin: center center;\n}\n\n/* Animation keyframes */\n@keyframes mgzaYu4B32d_aS32fY1V {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes nDdsouKz1mLh_oKU0Rz2 {\n  from { opacity: 1; }\n  to { opacity: 0; }\n}\n\n@keyframes JYOjcBpZNBuqNy35ls9e {\n  from { \n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to { \n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes FiZdssCEDHqqsxmsd0IB {\n  from { \n    opacity: 1;\n    transform: translateY(0);\n  }\n  to { \n    opacity: 0;\n    transform: translateY(-20px);\n  }\n}\n\n@keyframes bVcVqiwTCku36eUL1A0Y {\n  from { \n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to { \n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes gYGVF3J5BcPa_Pu1v10K {\n  from { \n    opacity: 1;\n    transform: translateY(0);\n  }\n  to { \n    opacity: 0;\n    transform: translateY(20px);\n  }\n}\n\n@keyframes cB5wZjItt0pVxLEZalbq {\n  from { \n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to { \n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes ZduosBgkZSX6HmjUtNkw {\n  from { \n    opacity: 1;\n    transform: translateX(0);\n  }\n  to { \n    opacity: 0;\n    transform: translateX(20px);\n  }\n}\n\n@keyframes lJaHh9EYVMGUV0LVBrZg {\n  from { \n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to { \n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes VCQ4OkbwvZVipVcK7c7W {\n  from { \n    opacity: 1;\n    transform: translateX(0);\n  }\n  to { \n    opacity: 0;\n    transform: translateX(-20px);\n  }\n}\n\n@keyframes DtfJzsxZQDSN6NwAwZ5M {\n  from { \n    opacity: 0;\n    transform: scale(0.5);\n  }\n  to { \n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes fEqd8smvFID8_LkU4GA3 {\n  0% { \n    opacity: 1;\n    transform: scale(1);\n  }\n  20% {\n    transform: scale(1.1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(0.5);\n  }\n}\n\n@keyframes N58l1dLOWpOVKgKoyTml {\n  from { \n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to { \n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes H6dNb7Dwj3xvork0HfpO {\n  from { \n    opacity: 1;\n    transform: scale(1);\n  }\n  to { \n    opacity: 0;\n    transform: scale(0.9);\n  }\n}\n\n/* Dark mode adjustments - using CSS variables from themes.css instead of overriding colors directly */\n.dark-mode .dwBZ9HYCSh3B_5ygCDHI {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}","",{version:3,sources:["webpack://./src/components/Alert/Alert.module.css"],names:[],mappings:"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;;AAEA;EACE;IACE,UAAU;IACV,2BAA2B;EAC7B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,UAAU;IACV,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,4BAA4B;EAC9B;AACF;;AAEA;EACE;IACE,UAAU;IACV,4BAA4B;EAC9B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,UAAU;IACV,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,2BAA2B;EAC7B;AACF;;AAEA;EACE;IACE,UAAU;IACV,2BAA2B;EAC7B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,UAAU;IACV,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,2BAA2B;EAC7B;AACF;;AAEA;EACE;IACE,UAAU;IACV,4BAA4B;EAC9B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,UAAU;IACV,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,4BAA4B;EAC9B;AACF;;AAEA;EACE;IACE,UAAU;IACV,qBAAqB;EACvB;EACA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,UAAU;IACV,mBAAmB;EACrB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,UAAU;IACV,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,UAAU;IACV,qBAAqB;EACvB;EACA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,UAAU;IACV,mBAAmB;EACrB;EACA;IACE,UAAU;IACV,qBAAqB;EACvB;AACF;;AAEA,sGAAsG;AACtG;EACE,yCAAyC;AAC3C",sourcesContent:["/* Base alert styling */\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  display: flex;\n  align-items: flex-start;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n}\n\n/* Icon container */\n.alertIcon {\n  margin-right: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 1.25rem;\n  flex-shrink: 0; /* Prevent icon from shrinking */\n  width: 1.5rem; /* Consistent width for alignment */\n  justify-content: center; /* Center icon */\n}\n\n/* Make sure icons within the alert icon container maintain proper sizing */\n.alertIcon i {\n  font-size: inherit;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5rem; /* Consistent height */\n  width: 1.5rem; /* Consistent width */\n}\n\n/* Content area */\n.alertContent {\n  flex: 1;\n  margin-right: 1rem;\n  padding-top: 0.125rem; /* Slight padding to align with icon */\n}\n\n/* Close button */\n.closeButton {\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  height: 1.5rem; /* Consistent height */\n  width: 1.5rem; /* Consistent width */\n  flex-shrink: 0; /* Prevent button from shrinking */\n}\n\n.closeButton:hover {\n  opacity: 1;\n}\n\n.closeButton:focus {\n  outline: none;\n  opacity: 1;\n}\n\n/* Custom styles for Font Awesome icons */\n.alert i.fa,\n.alert i.fas,\n.alert i.far,\n.alert i.fab {\n  /* Ensure Font Awesome icons are sized correctly */\n  text-align: center;\n  vertical-align: middle;\n}\n\n/* Custom styles for Remix icons */\n.alert i.ri {\n  /* Ensure Remix icons are sized correctly */\n  vertical-align: middle;\n}\n\n/* Alert variants */\n.alert-primary {\n  color: #6065f2;\n  background-color: rgba(198, 200, 247, 0.1);\n  border-color: #6065f2;\n}\n\n.alert-secondary {\n  color: #545b62;\n  background-color: rgba(204, 206, 210, 0.1);\n  border-color: #545b62;\n}\n\n.alert-success {\n  color: #57d25f;\n  background-color: rgba(183, 225, 186, 0.1);\n  border-color: #57d25f;\n}\n\n.alert-danger {\n  color: #e873a9;\n  background-color: rgba(255, 218, 235, 0.1);\n  border-color: #e873a9;\n}\n\n.alert-warning {\n  color: #f8c432;\n  background-color: rgba(255, 235, 223, 0.1);\n  border-color: #f8c432;\n}\n\n.alert-info {\n  color: #fa9674;\n  background-color: rgba(255, 230, 222, 0.1);\n  border-color: #fa9674;\n}\n\n.alert-light {\n  color: #545b62;\n  background-color: rgba(250, 250, 250, 0.1);\n  border-color: #545b62;\n}\n\n/* Background variants */\n.bg-primary {\n  color: white;\n  background-color: #6065f2;\n  border-color: #6065f2;\n}\n\n.bg-secondary {\n  color: white;\n  background-color: #545b62;\n  border-color: #545b62;\n}\n\n.bg-success {\n  color: white;\n  background-color: #57d25f;\n  border-color: #57d25f;\n}\n\n.bg-danger {\n  color: white;\n  background-color: #e873a9;\n  border-color: #e873a9;\n}\n\n.bg-warning {\n  color: #212529;\n  background-color: #f8c432;\n  border-color: #f8c432;\n}\n\n.bg-info {\n  color: white;\n  background-color: #fa9674;\n  border-color: #fa9674;\n}\n\n.bg-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n/* Animation variants */\n.animation-fade.entering {\n  opacity: 0;\n  animation: fade-in 0.3s forwards;\n}\n\n.animation-fade.leaving {\n  animation: fade-out 0.3s forwards;\n}\n\n.animation-slide.entering {\n  opacity: 0;\n  transform: translateY(20px);\n  animation: slide-up-in 0.3s forwards;\n}\n\n.animation-slide.leaving {\n  animation: slide-up-out 0.3s forwards;\n}\n\n.animation-slide-up.entering {\n  opacity: 0;\n  transform: translateY(20px);\n  animation: slide-up-in 0.3s forwards;\n}\n\n.animation-slide-up.leaving {\n  animation: slide-up-out 0.3s forwards;\n}\n\n.animation-slide-down.entering {\n  opacity: 0;\n  transform: translateY(-20px);\n  animation: slide-down-in 0.3s forwards;\n}\n\n.animation-slide-down.leaving {\n  animation: slide-down-out 0.3s forwards;\n}\n\n.animation-slide-left.entering {\n  opacity: 0;\n  transform: translateX(20px);\n  animation: slide-left-in 0.3s forwards;\n}\n\n.animation-slide-left.leaving {\n  animation: slide-left-out 0.3s forwards;\n}\n\n.animation-slide-right.entering {\n  opacity: 0;\n  transform: translateX(-20px);\n  animation: slide-right-in 0.3s forwards;\n}\n\n.animation-slide-right.leaving {\n  animation: slide-right-out 0.3s forwards;\n}\n\n.animation-bounce.entering {\n  opacity: 0;\n  transform: scale(0.5);\n  animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;\n}\n\n.animation-bounce.leaving {\n  animation: bounce-out 0.3s forwards;\n}\n\n.animation-zoom.entering {\n  opacity: 0;\n  transform: scale(0.9);\n  animation: zoom-in 0.3s forwards;\n}\n\n.animation-zoom.leaving {\n  animation: zoom-out 0.3s forwards;\n}\n\n/* Position variants - used for animation directions */\n.position-top {\n  transform-origin: top center;\n}\n\n.position-bottom {\n  transform-origin: bottom center;\n}\n\n.position-left {\n  transform-origin: left center;\n}\n\n.position-right {\n  transform-origin: right center;\n}\n\n.position-center {\n  transform-origin: center center;\n}\n\n/* Animation keyframes */\n@keyframes fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes fade-out {\n  from { opacity: 1; }\n  to { opacity: 0; }\n}\n\n@keyframes slide-up-in {\n  from { \n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to { \n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes slide-up-out {\n  from { \n    opacity: 1;\n    transform: translateY(0);\n  }\n  to { \n    opacity: 0;\n    transform: translateY(-20px);\n  }\n}\n\n@keyframes slide-down-in {\n  from { \n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to { \n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes slide-down-out {\n  from { \n    opacity: 1;\n    transform: translateY(0);\n  }\n  to { \n    opacity: 0;\n    transform: translateY(20px);\n  }\n}\n\n@keyframes slide-left-in {\n  from { \n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to { \n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes slide-left-out {\n  from { \n    opacity: 1;\n    transform: translateX(0);\n  }\n  to { \n    opacity: 0;\n    transform: translateX(20px);\n  }\n}\n\n@keyframes slide-right-in {\n  from { \n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to { \n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes slide-right-out {\n  from { \n    opacity: 1;\n    transform: translateX(0);\n  }\n  to { \n    opacity: 0;\n    transform: translateX(-20px);\n  }\n}\n\n@keyframes bounce-in {\n  from { \n    opacity: 0;\n    transform: scale(0.5);\n  }\n  to { \n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes bounce-out {\n  0% { \n    opacity: 1;\n    transform: scale(1);\n  }\n  20% {\n    transform: scale(1.1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(0.5);\n  }\n}\n\n@keyframes zoom-in {\n  from { \n    opacity: 0;\n    transform: scale(0.9);\n  }\n  to { \n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes zoom-out {\n  from { \n    opacity: 1;\n    transform: scale(1);\n  }\n  to { \n    opacity: 0;\n    transform: scale(0.9);\n  }\n}\n\n/* Dark mode adjustments - using CSS variables from themes.css instead of overriding colors directly */\n:global(.dark-mode) .alert {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={alert:"dwBZ9HYCSh3B_5ygCDHI",alertIcon:"W4CKEcqX0F5LFrGU3hxn",alertContent:"pUmH2kmdw2tVwbDNewai",closeButton:"LQpyTz3WifQeiOGndIQi",fa:"VuAaU9SeoEC_b7EKXVDK",fas:"Iq2CpU3F4mC5uHwku55J",far:"hXvi2AldW0Ab_M5U7y6S",fab:"cdpLuzQ6Jyij8KSlJQoZ",ri:"mZFAFqsWlYFKaj8dw2Tm","alert-primary":"deYAPKQLQGxVlBTYHJ9G","alert-secondary":"Qe_EksMLSRlzrQa1QE29","alert-success":"TSWmmGpwo0K_bBsJdGA6","alert-danger":"l81NMv_wBfaqsx5nr9Hw","alert-warning":"LyjWa8e1Rpo7qAlf0qib","alert-info":"GrTKHVptPF0_w1naEi7e","alert-light":"CZ6XV20V8YfvGrTIwTXw","bg-primary":"DwGEilhdoZ7La2tkNad2","bg-secondary":"fWvDXV2graLXKrdiTkBC","bg-success":"HfjqnvVyxjcanA_WY5DJ","bg-danger":"zTN3ccL_fAKCAnwCJm14","bg-warning":"Q7ghLEMybezkqXcclqDd","bg-info":"BLAUynu4cnkN7CjzdKIw","bg-light":"AJih_0ZrKAPr8VYS8nbd","animation-fade":"Pr3653jBDCwyVdyq7fqE",entering:"cw9SoELGvLz8KpV1E2Dy","fade-in":"mgzaYu4B32d_aS32fY1V",leaving:"E2PSQR9g7ROrFTHMQPNY","fade-out":"nDdsouKz1mLh_oKU0Rz2","animation-slide":"XhueFEoMq2iNObF3MUjl","slide-up-in":"JYOjcBpZNBuqNy35ls9e","slide-up-out":"FiZdssCEDHqqsxmsd0IB","animation-slide-up":"dHesoJuxfK6VBaizW_lv","animation-slide-down":"zkdZe4pBpIumpyAY03Im","slide-down-in":"bVcVqiwTCku36eUL1A0Y","slide-down-out":"gYGVF3J5BcPa_Pu1v10K","animation-slide-left":"wpJRYUrfPtsRMcIGtpsB","slide-left-in":"cB5wZjItt0pVxLEZalbq","slide-left-out":"ZduosBgkZSX6HmjUtNkw","animation-slide-right":"NaG0Zdby7MsrlT5KGp13","slide-right-in":"lJaHh9EYVMGUV0LVBrZg","slide-right-out":"VCQ4OkbwvZVipVcK7c7W","animation-bounce":"dxwTlVuue3vkd5rXjcLS","bounce-in":"DtfJzsxZQDSN6NwAwZ5M","bounce-out":"fEqd8smvFID8_LkU4GA3","animation-zoom":"DPGMp3l53SKa4ZNXUhwV","zoom-in":"N58l1dLOWpOVKgKoyTml","zoom-out":"H6dNb7Dwj3xvork0HfpO","position-top":"wsKWJBw5fI85bSngcHF_","position-bottom":"d5uX6aVaKj4n3toFr2Pp","position-left":"DV_zjZtD9qv6peH0NyXg","position-right":"b5tPQy7qaDSQ2zNUI4Dv","position-center":"jqrgq8XFNjDizrCbXThy"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Alert/Alert.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Alert_Alert});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Icon=__webpack_require__("./src/components/Icon/Icon.jsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Alert_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/components/Alert/Alert.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Alert_module.A,options);const Alert_Alert_module=Alert_module.A&&Alert_module.A.locals?Alert_module.A.locals:void 0,Alert=({variant="primary",withIcon=!1,withBackground=!1,dismissible=!1,icon=null,children,onDismiss=null,className="",autoHideDuration=0,position="top",animation="fade",iconSet="ri"})=>{const[visible,setVisible]=(0,react.useState)(!1),[leaving,setLeaving]=(0,react.useState)(!1),handleDismiss=(0,react.useCallback)((()=>{setLeaving(!0),setTimeout((()=>{setVisible(!1),onDismiss&&onDismiss()}),300)}),[onDismiss]);if((0,react.useEffect)((()=>{if(setVisible(!0),autoHideDuration>0){const timer=setTimeout((()=>{handleDismiss()}),autoHideDuration);return()=>clearTimeout(timer)}}),[autoHideDuration,handleDismiss]),!visible)return null;const alertClasses=[Alert_Alert_module.alert,Alert_Alert_module[`alert-${variant}`],withBackground?Alert_Alert_module[`bg-${variant}`]:"",Alert_Alert_module[`position-${position}`],Alert_Alert_module[`animation-${animation}`],leaving?Alert_Alert_module.leaving:Alert_Alert_module.entering,className].filter(Boolean).join(" ");return react.createElement("div",{className:alertClasses,role:"alert"},withIcon&&react.createElement("div",{className:Alert_Alert_module.alertIcon},react.createElement(Icon.A,{name:icon||{primary:"information-line",secondary:"information-line",success:"check-line",danger:"close-circle-line",warning:"alert-line",info:"information-line",light:"information-line"}[variant]||"information-line",set:iconSet,size:"lg"})),react.createElement("div",{className:Alert_Alert_module.alertContent},children),dismissible&&react.createElement("button",{type:"button",className:Alert_Alert_module.closeButton,onClick:handleDismiss,"aria-label":"Close"},react.createElement(Icon.A,{name:"close-line",set:iconSet})))};Alert.propTypes={variant:prop_types_default().oneOf(["primary","secondary","success","danger","warning","info","light"]),withIcon:prop_types_default().bool,withBackground:prop_types_default().bool,dismissible:prop_types_default().bool,icon:prop_types_default().string,children:prop_types_default().node.isRequired,onDismiss:prop_types_default().func,className:prop_types_default().string,autoHideDuration:prop_types_default().number,position:prop_types_default().oneOf(["top","bottom","left","right","center"]),animation:prop_types_default().oneOf(["fade","slide","bounce","zoom"]),iconSet:prop_types_default().string};const Alert_Alert=Alert;Alert.__docgenInfo={description:"Alert Component\n\nA versatile alert component supporting various styles, icons, and behaviors.",methods:[],displayName:"Alert",props:{variant:{defaultValue:{value:"'primary'",computed:!1},description:"Alert style variant",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'success'",computed:!1},{value:"'danger'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1},{value:"'light'",computed:!1}]},required:!1},withIcon:{defaultValue:{value:"false",computed:!1},description:"Whether to display an icon",type:{name:"bool"},required:!1},withBackground:{defaultValue:{value:"false",computed:!1},description:"Use colored background instead of colored text",type:{name:"bool"},required:!1},dismissible:{defaultValue:{value:"false",computed:!1},description:"Whether the alert can be dismissed",type:{name:"bool"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"Custom icon class (defaults based on variant)",type:{name:"string"},required:!1},onDismiss:{defaultValue:{value:"null",computed:!1},description:"Callback function when alert is dismissed",type:{name:"func"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"Additional CSS classes",type:{name:"string"},required:!1},autoHideDuration:{defaultValue:{value:"0",computed:!1},description:"Auto-hide duration in milliseconds (0 = no auto-hide)",type:{name:"number"},required:!1},position:{defaultValue:{value:"'top'",computed:!1},description:"Alert position, used for animations",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1},{value:"'center'",computed:!1}]},required:!1},animation:{defaultValue:{value:"'fade'",computed:!1},description:"Animation type for appearance/disappearance",type:{name:"enum",value:[{value:"'fade'",computed:!1},{value:"'slide'",computed:!1},{value:"'bounce'",computed:!1},{value:"'zoom'",computed:!1}]},required:!1},iconSet:{defaultValue:{value:"'ri'",computed:!1},description:"Icon set to use",type:{name:"string"},required:!1},children:{description:"Alert content",type:{name:"node"},required:!0}}}},"./src/components/Icon/Icon.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);const Icon=({name="",set="ri",size="md",color="currentColor",className="",...props})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",{className:`${(()=>{if("ri"===set)return`ri-${name}`;if("fa"===set){return`${name.startsWith("fab-")?"fab":name.startsWith("far-")?"far":"fas"} fa-${name.replace(/^(fab|far|fas)-/,"")}`}return name})()} ${className}`,style:{fontSize:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.25rem",xl:"1.5rem","2xl":"2rem","3xl":"3rem"}[size]||size,color,...props.style},...props});Icon.propTypes={name:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,set:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["ri","fa"]),size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["xs","sm","md","lg","xl","2xl","3xl"]),prop_types__WEBPACK_IMPORTED_MODULE_1___default().string]),color:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default().object};const __WEBPACK_DEFAULT_EXPORT__=Icon;Icon.__docgenInfo={description:"Icon Component\n\nRenders icons from different icon sets (Remix Icon, Font Awesome, etc.)",methods:[],displayName:"Icon",props:{name:{defaultValue:{value:"''",computed:!1},description:"Icon name (e.g. 'alert-line' for Remix Icon, 'info-circle' for Font Awesome)",type:{name:"string"},required:!1},set:{defaultValue:{value:"'ri'",computed:!1},description:"Icon set to use (e.g., 'ri' for Remix Icon, 'fa' for Font Awesome)",type:{name:"enum",value:[{value:"'ri'",computed:!1},{value:"'fa'",computed:!1}]},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"Icon size (predefined or CSS value)",type:{name:"union",value:[{name:"enum",value:[{value:"'xs'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1},{value:"'3xl'",computed:!1}]},{name:"string"}]},required:!1},color:{defaultValue:{value:"'currentColor'",computed:!1},description:"Icon color",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"Additional CSS class",type:{name:"string"},required:!1},style:{description:"Additional props",type:{name:"object"},required:!1}}}}}]);