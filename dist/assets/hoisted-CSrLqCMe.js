let o=localStorage.getItem("hts-analytics-consent")==="true";function i(){const e=document.getElementById("consent-banner");!o&&e&&(e.innerHTML=`
            <div class="fixed bottom-0 left-0 right-0 bg-primary-800 text-white p-4 z-50">
              <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="text-sm">
                  <p>We use analytics to improve our website. No personal data is collected.</p>
                </div>
                <div class="flex gap-2">
                  <button onclick="acceptAnalytics()" class="bg-accent-500 hover:bg-accent-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-300">
                    Accept
                  </button>
                  <button onclick="declineAnalytics()" class="bg-neutral-500 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-300">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          `,e.classList.remove("hidden"))}document.addEventListener("DOMContentLoaded",i);document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("mobile-menu-button"),t=document.getElementById("mobile-menu");e&&t&&e.addEventListener("click",function(){const n=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",!n),t.classList.toggle("hidden")})});
