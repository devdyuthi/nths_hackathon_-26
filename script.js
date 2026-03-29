const chartPalette = ["#26412c", "#35563d", "#4d7355", "#6e9374", "#90b194", "#b78e62"];

const appState = {
  role: null,
  section: "home",
  organizationUser: {
    orgName: "Harvest Table Kitchen",
    contact: "Maria Patel",
    email: "maria@harvesttablekitchen.org",
    phone: "(214) 555-0181",
    website: "www.harvesttablekitchen.org",
    address: "142 Oak Street, Dallas, TX",
    type: "Restaurant",
    pickupNotes: "Use rear entrance after 6 PM. Bring stackable crates when possible."
  },
  donorUser: {
    orgName: "Hope Community Pantry",
    contact: "Jordan Lee",
    email: "jordan@hopepantry.org",
    phone: "(214) 555-0144",
    website: "www.hopepantry.org",
    address: "88 Elm Avenue, Dallas, TX",
    serviceArea: "North Dallas and nearby neighborhoods",
    capacity: "Cold storage + 1 van available"
  },
  donationHistory: [
    { title: "Prepared meals pickup", pounds: 85, date: "Mar 24", partner: "Hope Community Pantry" },
    { title: "Bakery items donation", pounds: 42, date: "Mar 21", partner: "Northside Food Bank" },
    { title: "Produce rescue", pounds: 130, date: "Mar 18", partner: "Unity Shelter" },
    { title: "Beverage rescue", pounds: 58, date: "Mar 15", partner: "Grace Food Bank" },
    { title: "Packaged meals pickup", pounds: 74, date: "Mar 11", partner: "Unity Shelter" }
  ],
  pickupsHistory: [
    { title: "Harvest Table Kitchen pickup", pounds: 85, date: "Mar 24", partner: "Harvest Table Kitchen" },
    { title: "Golden Crust Bakery pickup", pounds: 42, date: "Mar 21", partner: "Golden Crust Bakery" },
    { title: "Oak Street Market produce pickup", pounds: 130, date: "Mar 18", partner: "Oak Street Market" },
    { title: "Riverfront Grill prepared meals", pounds: 66, date: "Mar 16", partner: "Riverfront Grill" },
    { title: "Neighborhood Deli sandwich pickup", pounds: 33, date: "Mar 10", partner: "Neighborhood Deli" }
  ],
  slots: [
    { id: 1, org: "Harvest Table Kitchen", foodType: "Prepared meals", pounds: 60, date: "Mar 29", time: "6:30 PM", location: "Dallas", status: "Open", donor: "" },
    { id: 2, org: "Golden Crust Bakery", foodType: "Bakery", pounds: 35, date: "Mar 30", time: "4:00 PM", location: "Plano", status: "Filled", donor: "Hope Community Pantry" },
    { id: 3, org: "Oak Street Market", foodType: "Produce", pounds: 95, date: "Mar 31", time: "7:00 PM", location: "Dallas", status: "Open", donor: "" },
    { id: 4, org: "Riverfront Grill", foodType: "Packaged goods", pounds: 28, date: "Apr 1", time: "5:15 PM", location: "Irving", status: "Completed", donor: "Northside Food Bank" },
    { id: 5, org: "Neighborhood Deli", foodType: "Sandwiches", pounds: 22, date: "Apr 2", time: "3:30 PM", location: "Dallas", status: "Cancelled", donor: "" },
    { id: 6, org: "Harvest Table Kitchen", foodType: "Dairy items", pounds: 48, date: "Apr 3", time: "7:15 PM", location: "Dallas", status: "Open", donor: "" },
    { id: 7, org: "Harvest Table Kitchen", foodType: "Packaged salads", pounds: 31, date: "Apr 4", time: "6:45 PM", location: "Dallas", status: "Filled", donor: "Unity Shelter" },
    { id: 8, org: "Oak Street Market", foodType: "Fruit boxes", pounds: 110, date: "Apr 5", time: "5:30 PM", location: "Plano", status: "Open", donor: "" },
    { id: 9, org: "Golden Crust Bakery", foodType: "Bread trays", pounds: 44, date: "Apr 6", time: "3:00 PM", location: "Dallas", status: "Open", donor: "" },
    { id: 10, org: "Riverfront Grill", foodType: "Prepared meals", pounds: 72, date: "Apr 6", time: "7:30 PM", location: "Irving", status: "Open", donor: "" },
    { id: 11, org: "Neighborhood Deli", foodType: "Cold sandwiches", pounds: 38, date: "Apr 7", time: "2:45 PM", location: "Dallas", status: "Open", donor: "" },
    { id: 12, org: "Oak Street Market", foodType: "Produce boxes", pounds: 120, date: "Apr 7", time: "6:00 PM", location: "Plano", status: "Open", donor: "" },
    { id: 13, org: "Harvest Table Kitchen", foodType: "Soup containers", pounds: 54, date: "Apr 8", time: "6:15 PM", location: "Dallas", status: "Open", donor: "" },
    { id: 14, org: "Golden Crust Bakery", foodType: "Pastry packs", pounds: 26, date: "Apr 8", time: "1:00 PM", location: "Plano", status: "Open", donor: "" }
  ],
  orgStats: {
    donationGrowth: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
      values: [26, 30, 34, 42, 51, 63, 79],
      yLabel: "Donation activity score",
      xLabel: "Weekly reporting period"
    },
    poundsByMonth: {
      labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      values: [180, 220, 265, 310, 355, 420],
      yLabel: "Pounds donated",
      xLabel: "Month"
    },
    monthlyCount: {
      labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      values: [6, 8, 9, 12, 14, 18],
      yLabel: "Donation events",
      xLabel: "Month"
    },
    pickupDays: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      values: [4, 7, 10, 12, 9, 5],
      yLabel: "Number of pickups",
      xLabel: "Day of week"
    },
    categoryBreakdown: [
      { label: "Prepared Meals", value: 42 },
      { label: "Produce", value: 30 },
      { label: "Bakery", value: 16 },
      { label: "Packaged Goods", value: 12 }
    ]
  },
  donorStats: {
    receivedGrowth: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
      values: [18, 24, 31, 43, 54, 64, 73],
      yLabel: "Pounds received",
      xLabel: "Weekly reporting period"
    },
    pickupsByMonth: {
      labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      values: [5, 7, 8, 11, 13, 15],
      yLabel: "Completed pickups",
      xLabel: "Month"
    },
    poundsByMonth: {
      labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      values: [140, 182, 230, 288, 336, 398],
      yLabel: "Pounds received",
      xLabel: "Month"
    },
    pickupDays: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      values: [3, 6, 8, 10, 9, 4],
      yLabel: "Pickup count",
      xLabel: "Day of week"
    },
    categoryBreakdown: [
      { label: "Produce", value: 36 },
      { label: "Prepared Meals", value: 34 },
      { label: "Bakery", value: 20 },
      { label: "Dairy", value: 10 }
    ]
  }
};

function saveState() {
  localStorage.setItem("mealMatchData", JSON.stringify(appState));
}

function loadState() {
  const saved = localStorage.getItem("mealMatchData");
  if (saved) {
    const parsed = JSON.parse(saved);
    Object.assign(appState, parsed);
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.add("hidden"), 2300);
}

function createAccount(event, role) {
  event.preventDefault();

  if (role === "organization") {
    appState.role = "organization";
    appState.organizationUser.orgName = document.getElementById("signupOrgName").value;
    appState.organizationUser.contact = document.getElementById("signupOrgContact").value;
    appState.organizationUser.email = document.getElementById("signupOrgEmail").value;
  } else {
    appState.role = "donor";
    appState.donorUser.orgName = document.getElementById("signupDonorName").value;
    appState.donorUser.contact = document.getElementById("signupDonorContact").value;
    appState.donorUser.email = document.getElementById("signupDonorEmail").value;
  }

  localStorage.setItem("mealMatchRole", role);
  saveState();
  window.location.href = "dashboard.html";
}

function setupLoginPage() {
  const orgForm = document.getElementById("organizationSignupForm");
  const donorForm = document.getElementById("donorSignupForm");

  if (orgForm) orgForm.addEventListener("submit", (e) => createAccount(e, "organization"));
  if (donorForm) donorForm.addEventListener("submit", (e) => createAccount(e, "donor"));
}

function signOut() {
  localStorage.removeItem("mealMatchRole");
  localStorage.removeItem("mealMatchData");
  window.location.href = "login.html";
}

function getStatusClass(status) {
  return status.toLowerCase();
}

function openSlots() {
  return appState.slots.filter((slot) => slot.status === "Open");
}

function interactiveLineChart(dataset, color = "#26412c") {
  const width = 560;
  const height = 210;
  const values = dataset.values;
  const labels = dataset.labels;
  const max = Math.max(...values);
  const step = width / (values.length - 1);

  const yLabel = dataset.yLabel || "Value";
  const xLabel = dataset.xLabel || "Time period";

  const coords = values.map((value, i) => {
    const x = i * step;
    const y = height - (value / max) * (height - 35) - 10;
    return { x, y };
  });

  const polyline = coords.map((p) => `${p.x},${p.y}`).join(" ");

  return `
    <div class="line-chart-wrap chart-box">
      <div class="axis-label-y">${yLabel}</div>
      <div class="line-chart">
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
          <polyline class="line-animated" fill="none" stroke="${color}" stroke-width="4" points="${polyline}" />
          ${coords.map((p, index) => `
            <circle
              cx="${p.x}"
              cy="${p.y}"
              r="5"
              fill="${chartPalette[index % chartPalette.length]}"
              class="chart-point">
            </circle>
          `).join("")}
        </svg>
      </div>
      <div class="axis-row">
        <span>${labels[0]}</span>
        <span>${labels[Math.floor(labels.length / 2)]}</span>
        <span>${labels[labels.length - 1]}</span>
      </div>
      <div class="axis-label-x">${xLabel}</div>
    </div>
  `;
}

function interactiveBarChart(dataset) {
  const max = Math.max(...dataset.values);

  const yLabel = dataset.yLabel || "Value";
  const xLabel = dataset.xLabel || "Categories";

  return `
    <div class="chart-box">
      <div class="axis-label-y">${yLabel}</div>
      <div class="bars">
        ${dataset.values.map((value, index) => `
          <div class="bar-wrap">
            <div
              class="bar"
              style="
                height:${(value / max) * 130 + 26}px;
                background:${chartPalette[index % chartPalette.length]};
                animation-delay:${index * 0.08}s;
              ">
            </div>
            <div>${dataset.labels[index]}</div>
          </div>
        `).join("")}
      </div>
      <div class="axis-label-x">${xLabel}</div>
    </div>
  `;
}

function stackChart(items) {
  const total = items.reduce((sum, item) => sum + item.value, 0);

  return `
    <div class="chart-box">
      <div class="stack-chart">
        ${items.map((item, index) => `
          <div class="stack-row">
            <div>${item.label}</div>
            <div class="stack-track">
              <div
                class="stack-fill"
                style="width:${(item.value / total) * 100}%; background:${chartPalette[index % chartPalette.length]}; animation-delay:${index * 0.1}s;">
              </div>
            </div>
            <div>${item.value}%</div>
          </div>
        `).join("")}
      </div>
      <div class="chart-legend">
        ${items.map((item, index) => `
          <div class="legend-item">
            <span class="legend-swatch" style="background:${chartPalette[index % chartPalette.length]}"></span>
            <span>${item.label}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function statsInsights(type) {
  if (type === "organization") {
    return `
      <div class="stats-summary">
        <h3>What the data is showing</h3>
        <div class="insight-grid">
          <div class="insight-card">
            <strong>Strongest growth month</strong>
            <span class="muted">April had the highest donation volume at 420 pounds donated.</span>
          </div>
          <div class="insight-card">
            <strong>Best operating day</strong>
            <span class="muted">Thursday is the busiest pickup day, suggesting the strongest donor demand window.</span>
          </div>
          <div class="insight-card">
            <strong>Most common category</strong>
            <span class="muted">Prepared meals make up the largest share of donated food at 42%.</span>
          </div>
          <div class="insight-card">
            <strong>Operational feedback</strong>
            <span class="muted">An 88% fill rate suggests posted slots are being claimed consistently by partners.</span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="stats-summary">
      <h3>What the data is showing</h3>
      <div class="insight-grid">
        <div class="insight-card">
          <strong>Highest pickup month</strong>
          <span class="muted">April shows the highest receiving activity with 15 completed pickups.</span>
        </div>
        <div class="insight-card">
          <strong>Top scheduling day</strong>
          <span class="muted">Thursday is the strongest pickup day for your organization.</span>
        </div>
        <div class="insight-card">
          <strong>Main food source</strong>
          <span class="muted">Produce is the largest received category at 36% of all incoming food.</span>
        </div>
        <div class="insight-card">
          <strong>Reliability feedback</strong>
          <span class="muted">A 94% on-time pickup rate suggests strong coordination and dependable collection.</span>
        </div>
      </div>
    </div>
  `;
}

function renderOrgHome() {
  const upcoming = appState.slots.filter(
    (s) => s.org === appState.organizationUser.orgName && (s.status === "Open" || s.status === "Filled")
  );

  return `
    <div class="portal-header">
      <div>
        <span class="role-badge">Food Organization Portal</span>
        <h1>Welcome back, ${appState.organizationUser.contact}</h1>
        <div class="muted">${appState.organizationUser.orgName}</div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card"><div class="stat-label">Total pounds donated</div><div class="stat-number">3,860</div></div>
      <div class="stat-card"><div class="stat-label">Donations this month</div><div class="stat-number">18</div></div>
      <div class="stat-card"><div class="stat-label">Upcoming pickups</div><div class="stat-number">${upcoming.length}</div></div>
      <div class="stat-card"><div class="stat-label">Partner donors</div><div class="stat-number">12</div></div>
    </div>

    <div class="content-grid">
      <div class="list-card">
        <h3>Recent donations</h3>
        ${appState.donationHistory.map((item) => `
          <div class="activity-item">
            <strong>${item.title}</strong>
            <div class="muted">${item.pounds} lbs · ${item.date} · Picked up by ${item.partner}</div>
          </div>
        `).join("")}
      </div>

      <div class="list-card">
        <h3>Upcoming pickup schedule</h3>
        ${upcoming.length ? upcoming.map((slot) => `
          <div class="slot-item">
            <div class="slot-main">
              <span class="tag ${getStatusClass(slot.status)}">${slot.status}</span>
              <strong>${slot.foodType}</strong>
              <div class="muted">${slot.date} at ${slot.time} · ${slot.pounds} lbs</div>
            </div>
            <div class="muted">${slot.donor || "Awaiting signup"}</div>
          </div>
        `).join("") : `<p class="muted">No upcoming pickups yet.</p>`}
      </div>
    </div>
  `;
}

function renderDonorHome() {
  const mine = appState.slots.filter(
    (s) => s.donor === appState.donorUser.orgName && (s.status === "Filled" || s.status === "Completed")
  );

  return `
    <div class="portal-header">
      <div>
        <span class="role-badge">Food Donor Portal</span>
        <h1>Welcome back, ${appState.donorUser.contact}</h1>
        <div class="muted">${appState.donorUser.orgName}</div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card"><div class="stat-label">Total pounds received</div><div class="stat-number">2,940</div></div>
      <div class="stat-card"><div class="stat-label">Pickups this month</div><div class="stat-number">15</div></div>
      <div class="stat-card"><div class="stat-label">Upcoming pickups</div><div class="stat-number">${mine.filter(s => s.status === "Filled").length}</div></div>
      <div class="stat-card"><div class="stat-label">Active partners</div><div class="stat-number">9</div></div>
    </div>

    <div class="content-grid">
      <div class="list-card">
        <h3>Recent pickups</h3>
        ${appState.pickupsHistory.map((item) => `
          <div class="activity-item">
            <strong>${item.title}</strong>
            <div class="muted">${item.pounds} lbs · ${item.date}</div>
          </div>
        `).join("")}
      </div>

      <div class="list-card">
        <h3>Available donation slots</h3>
        ${openSlots().slice(0, 8).map((slot) => `
          <div class="slot-item">
            <div class="slot-main">
              <span class="tag open">Open</span>
              <strong>${slot.org}</strong>
              <div class="muted">${slot.foodType} · ${slot.pounds} lbs · ${slot.date} ${slot.time}</div>
              <div class="muted">${slot.location}</div>
            </div>
            <button class="primary" onclick="signUpForSlot(${slot.id})">Sign Up</button>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderOrgDonations() {
  const orgSlots = appState.slots.filter((slot) => slot.org === appState.organizationUser.orgName);

  return `
    <div class="portal-header">
      <div>
        <span class="role-badge">Food Organization Portal</span>
        <h1>Donation scheduling</h1>
        <div class="muted">${appState.organizationUser.orgName}</div>
      </div>
    </div>

    <div class="content-grid">
      <div class="form-card">
        <h3>Create donation slot</h3>
        <form id="createSlotForm">
          <div class="form-row">
            <input id="foodType" placeholder="Food type" required />
            <input id="pounds" type="number" placeholder="Estimated pounds" required />
          </div>
          <div class="form-row">
            <input id="pickupDate" placeholder="Pickup date" required />
            <input id="pickupTime" placeholder="Pickup time" required />
          </div>
          <div class="form-row">
            <input id="pickupLocation" placeholder="Location" required />
            <select id="slotStatus">
              <option>Open</option>
              <option>Filled</option>
            </select>
          </div>
          <textarea id="slotNotes" placeholder="Notes (optional)"></textarea>
          <button class="button primary" type="submit">Create Slot</button>
        </form>
      </div>

      <div class="list-card">
        <h3>Your donation slots</h3>
        ${orgSlots.length ? orgSlots.map((slot) => `
          <div class="slot-item">
            <div class="slot-main">
              <span class="tag ${getStatusClass(slot.status)}">${slot.status}</span>
              <strong>${slot.foodType}</strong>
              <div class="muted">${slot.pounds} lbs · ${slot.date} at ${slot.time} · ${slot.location}</div>
              <div class="muted">${slot.donor ? "Claimed by " + slot.donor : "No donor signed up yet"}</div>
            </div>
            ${slot.status === "Open" ? `<button onclick="assignDemoDonor(${slot.id})">Assign Demo Donor</button>` : ""}
          </div>
        `).join("") : `<p class="muted">No slots yet.</p>`}
      </div>
    </div>
  `;
}

function renderDonorDonations() {
  const mine = appState.slots.filter((slot) => slot.donor === appState.donorUser.orgName);

  return `
    <div class="portal-header">
      <div>
        <span class="role-badge">Food Donor Portal</span>
        <h1>Available opportunities</h1>
        <div class="muted">${appState.donorUser.orgName}</div>
      </div>
    </div>

    <div class="content-grid">
      <div class="list-card">
        <h3>Open donation slots</h3>
        ${openSlots().map((slot) => `
          <div class="slot-item">
            <div class="slot-main">
              <span class="tag open">Open</span>
              <strong>${slot.org}</strong>
              <div class="muted">${slot.foodType} · ${slot.pounds} lbs</div>
              <div class="muted">${slot.date} at ${slot.time} · ${slot.location}</div>
            </div>
            <button class="primary" onclick="signUpForSlot(${slot.id})">Sign Up</button>
          </div>
        `).join("")}
      </div>

      <div class="list-card">
        <h3>My signed-up pickups</h3>
        ${mine.length ? mine.map((slot) => `
          <div class="slot-item">
            <div class="slot-main">
              <span class="tag ${getStatusClass(slot.status)}">${slot.status}</span>
              <strong>${slot.org}</strong>
              <div class="muted">${slot.foodType} · ${slot.pounds} lbs</div>
              <div class="muted">${slot.date} at ${slot.time}</div>
            </div>
            ${slot.status === "Filled" ? `<button onclick="cancelSignup(${slot.id})">Cancel</button>` : ""}
          </div>
        `).join("") : `<p class="muted">No pickups signed up yet.</p>`}
      </div>
    </div>
  `;
}

function renderOrgStats() {
  return `
    <div class="portal-header">
      <div>
        <span class="role-badge">Food Organization Portal</span>
        <h1>Impact analytics</h1>
        <div class="muted">${appState.organizationUser.orgName}</div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card"><div class="stat-label">Monthly donation count</div><div class="stat-number">18</div></div>
      <div class="stat-card"><div class="stat-label">Average pounds per pickup</div><div class="stat-number">54</div></div>
      <div class="stat-card"><div class="stat-label">Slot fill rate</div><div class="stat-number">88%</div></div>
      <div class="stat-card"><div class="stat-label">Top pickup day</div><div class="stat-number">Thu</div></div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Donation growth over time</h3>
        ${interactiveLineChart(appState.orgStats.donationGrowth, "#26412c")}
        <div class="legend">Weekly donation activity across the current reporting period.</div>
      </div>
      <div class="chart-card">
        <h3>Pounds donated by month</h3>
        ${interactiveBarChart(appState.orgStats.poundsByMonth)}
        <div class="legend">Monthly donation volume across recent periods.</div>
      </div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Category breakdown</h3>
        ${stackChart(appState.orgStats.categoryBreakdown)}
      </div>
      <div class="chart-card">
        <h3>Top pickup days</h3>
        ${interactiveBarChart(appState.orgStats.pickupDays)}
      </div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Monthly donation count</h3>
        ${interactiveBarChart(appState.orgStats.monthlyCount)}
        <div class="legend">Count of donation events posted each month.</div>
      </div>
      <div class="chart-card">
        <h3>Additional impact stats</h3>
        <div class="tiny-stats-grid">
          <div class="tiny-stat"><strong>3,216</strong><span class="muted">estimated meals supported</span></div>
          <div class="tiny-stat"><strong>12</strong><span class="muted">repeat donor partners</span></div>
          <div class="tiny-stat"><strong>6</strong><span class="muted">average pickup hours</span></div>
          <div class="tiny-stat"><strong>92%</strong><span class="muted">completed pickup rate</span></div>
        </div>
      </div>
    </div>

    ${statsInsights("organization")}
  `;
}

function renderDonorStats() {
  return `
    <div class="portal-header">
      <div>
        <span class="role-badge">Food Donor Portal</span>
        <h1>Receiving analytics</h1>
        <div class="muted">${appState.donorUser.orgName}</div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card"><div class="stat-label">Monthly pickups</div><div class="stat-number">15</div></div>
      <div class="stat-card"><div class="stat-label">Average pounds per pickup</div><div class="stat-number">49</div></div>
      <div class="stat-card"><div class="stat-label">Top pickup day</div><div class="stat-number">Thu</div></div>
      <div class="stat-card"><div class="stat-label">Partner organizations</div><div class="stat-number">9</div></div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Pounds received over time</h3>
        ${interactiveLineChart(appState.donorStats.receivedGrowth, "#35563d")}
        <div class="legend">Weekly receiving growth across the current reporting period.</div>
      </div>
      <div class="chart-card">
        <h3>Pickups completed by month</h3>
        ${interactiveBarChart(appState.donorStats.pickupsByMonth)}
        <div class="legend">Completed pickups across recent months.</div>
      </div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Category breakdown</h3>
        ${stackChart(appState.donorStats.categoryBreakdown)}
      </div>
      <div class="chart-card">
        <h3>Top pickup days</h3>
        ${interactiveBarChart(appState.donorStats.pickupDays)}
      </div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Pounds received by month</h3>
        ${interactiveBarChart(appState.donorStats.poundsByMonth)}
        <div class="legend">Monthly volume of food received.</div>
      </div>
      <div class="chart-card">
        <h3>Additional recipient stats</h3>
        <div class="tiny-stats-grid">
          <div class="tiny-stat"><strong>2,450</strong><span class="muted">estimated meals distributed</span></div>
          <div class="tiny-stat"><strong>94%</strong><span class="muted">on-time pickup rate</span></div>
          <div class="tiny-stat"><strong>6</strong><span class="muted">repeat weekly partners</span></div>
          <div class="tiny-stat"><strong>4</strong><span class="muted">highest weekly pickups</span></div>
        </div>
      </div>
    </div>

    ${statsInsights("donor")}
  `;
}

function renderOrgProfile() {
  const u = appState.organizationUser;
  return `
    <div class="portal-header">
      <div>
        <span class="role-badge">Food Organization Portal</span>
        <h1>Your organization profile</h1>
        <div class="muted">${u.orgName}</div>
      </div>
    </div>

    <div class="profile-edit-grid">
      <div class="profile-card">
        <h3>Profile details</h3>
        ${renderProfileRows([
          ["Organization name", u.orgName],
          ["Contact name", u.contact],
          ["Email", u.email],
          ["Phone", u.phone],
          ["Website", u.website],
          ["Address", u.address],
          ["Organization type", u.type],
          ["Pickup instructions", u.pickupNotes]
        ])}
      </div>

      <div class="form-card">
        <h3>Edit profile</h3>
        <form id="orgProfileForm">
          <input id="orgNameEdit" value="${u.orgName}" required />
          <input id="orgContactEdit" value="${u.contact}" required />
          <input id="orgEmailEdit" value="${u.email}" required />
          <input id="orgPhoneEdit" value="${u.phone}" required />
          <input id="orgWebsiteEdit" value="${u.website}" />
          <input id="orgAddressEdit" value="${u.address}" />
          <input id="orgTypeEdit" value="${u.type}" />
          <textarea id="orgNotesEdit">${u.pickupNotes}</textarea>
          <button class="button primary" type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  `;
}

function renderDonorProfile() {
  const u = appState.donorUser;
  return `
    <div class="portal-header">
      <div>
        <span class="role-badge">Food Donor Portal</span>
        <h1>Your organization profile</h1>
        <div class="muted">${u.orgName}</div>
      </div>
    </div>

    <div class="profile-edit-grid">
      <div class="profile-card">
        <h3>Profile details</h3>
        ${renderProfileRows([
          ["Organization name", u.orgName],
          ["Contact name", u.contact],
          ["Email", u.email],
          ["Phone", u.phone],
          ["Website", u.website],
          ["Address", u.address],
          ["Service area", u.serviceArea],
          ["Storage / vehicle info", u.capacity]
        ])}
      </div>

      <div class="form-card">
        <h3>Edit profile</h3>
        <form id="donorProfileForm">
          <input id="donorNameEdit" value="${u.orgName}" required />
          <input id="donorContactEdit" value="${u.contact}" required />
          <input id="donorEmailEdit" value="${u.email}" required />
          <input id="donorPhoneEdit" value="${u.phone}" required />
          <input id="donorWebsiteEdit" value="${u.website}" />
          <input id="donorAddressEdit" value="${u.address}" />
          <input id="donorAreaEdit" value="${u.serviceArea}" />
          <textarea id="donorCapacityEdit">${u.capacity}</textarea>
          <button class="button primary" type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  `;
}

function renderProfileRows(rows) {
  return rows.map(([label, value]) => `
    <div class="profile-row">
      <strong>${label}</strong>
      <div class="muted">${value}</div>
    </div>
  `).join("");
}

function createSlot(event) {
  event.preventDefault();

  const slot = {
    id: Date.now(),
    org: appState.organizationUser.orgName,
    foodType: document.getElementById("foodType").value,
    pounds: document.getElementById("pounds").value,
    date: document.getElementById("pickupDate").value,
    time: document.getElementById("pickupTime").value,
    location: document.getElementById("pickupLocation").value,
    status: document.getElementById("slotStatus").value,
    donor: document.getElementById("slotStatus").value === "Filled" ? "Hope Community Pantry" : ""
  };

  appState.slots.unshift(slot);
  saveState();
  renderDashboard();
  showToast("Donation slot created.");
}

function assignDemoDonor(id) {
  const slot = appState.slots.find((s) => s.id === id);
  if (!slot) return;
  slot.status = "Filled";
  slot.donor = "Hope Community Pantry";
  saveState();
  renderDashboard();
  showToast("Slot reserved by Hope Community Pantry.");
}

function signUpForSlot(id) {
  const slot = appState.slots.find((s) => s.id === id);
  if (!slot || slot.status !== "Open") return;
  slot.status = "Filled";
  slot.donor = appState.donorUser.orgName;
  saveState();
  renderDashboard();
  showToast("Pickup scheduled successfully.");
}

function cancelSignup(id) {
  const slot = appState.slots.find((s) => s.id === id);
  if (!slot) return;
  slot.status = "Open";
  slot.donor = "";
  saveState();
  renderDashboard();
  showToast("Signup cancelled.");
}

function saveProfile(event, role) {
  event.preventDefault();

  if (role === "organization") {
    appState.organizationUser.orgName = document.getElementById("orgNameEdit").value;
    appState.organizationUser.contact = document.getElementById("orgContactEdit").value;
    appState.organizationUser.email = document.getElementById("orgEmailEdit").value;
    appState.organizationUser.phone = document.getElementById("orgPhoneEdit").value;
    appState.organizationUser.website = document.getElementById("orgWebsiteEdit").value;
    appState.organizationUser.address = document.getElementById("orgAddressEdit").value;
    appState.organizationUser.type = document.getElementById("orgTypeEdit").value;
    appState.organizationUser.pickupNotes = document.getElementById("orgNotesEdit").value;
  } else {
    appState.donorUser.orgName = document.getElementById("donorNameEdit").value;
    appState.donorUser.contact = document.getElementById("donorContactEdit").value;
    appState.donorUser.email = document.getElementById("donorEmailEdit").value;
    appState.donorUser.phone = document.getElementById("donorPhoneEdit").value;
    appState.donorUser.website = document.getElementById("donorWebsiteEdit").value;
    appState.donorUser.address = document.getElementById("donorAddressEdit").value;
    appState.donorUser.serviceArea = document.getElementById("donorAreaEdit").value;
    appState.donorUser.capacity = document.getElementById("donorCapacityEdit").value;
  }

  saveState();
  renderDashboard();
  showToast("Profile updated successfully.");
}

function bindDashboardEvents() {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      appState.section = link.dataset.section;
      renderDashboard();
    });
  });

  const createSlotForm = document.getElementById("createSlotForm");
  if (createSlotForm) createSlotForm.addEventListener("submit", createSlot);

  const orgProfileForm = document.getElementById("orgProfileForm");
  if (orgProfileForm) orgProfileForm.addEventListener("submit", (e) => saveProfile(e, "organization"));

  const donorProfileForm = document.getElementById("donorProfileForm");
  if (donorProfileForm) donorProfileForm.addEventListener("submit", (e) => saveProfile(e, "donor"));
}

function renderDashboard() {
  const portalContent = document.getElementById("portalContent");
  if (!portalContent) return;

  const savedRole = localStorage.getItem("mealMatchRole");
  const role = savedRole || appState.role || "organization";
  appState.role = role;

  const section = appState.section || "home";

  if (role === "organization") {
    if (section === "home") portalContent.innerHTML = renderOrgHome();
    if (section === "donations") portalContent.innerHTML = renderOrgDonations();
    if (section === "stats") portalContent.innerHTML = renderOrgStats();
    if (section === "profile") portalContent.innerHTML = renderOrgProfile();
  } else {
    if (section === "home") portalContent.innerHTML = renderDonorHome();
    if (section === "donations") portalContent.innerHTML = renderDonorDonations();
    if (section === "stats") portalContent.innerHTML = renderDonorStats();
    if (section === "profile") portalContent.innerHTML = renderDonorProfile();
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.section === section);
  });

  bindDashboardEvents();
}

/**
 * CONSOLIDATED LOGIN & SIGNUP HANDLER
 * (Replaces all previous login versions)
 */
function setupAuthHandlers() {
  const loginForm = document.getElementById("loginForm");
  const orgForm = document.getElementById("organizationSignupForm");
  const donorForm = document.getElementById("donorSignupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("loginEmail").value.trim().toLowerCase();

      // Check current appState for match
      const isOrg = emailInput === appState.organizationUser.email.toLowerCase();
      const isDonor = emailInput === appState.donorUser.email.toLowerCase();

      if (isOrg) {
        localStorage.setItem("mealMatchRole", "organization");
        saveState();
        window.location.href = "dashboard.html";
      } else if (isDonor) {
        localStorage.setItem("mealMatchRole", "donor");
        saveState();
        window.location.href = "dashboard.html";
      } else {
        alert("Email not recognized. Try 'maria@harvesttablekitchen.org' or 'jordan@hopepantry.org'");
      }
    });
  }

  if (orgForm) orgForm.addEventListener("submit", (e) => createAccount(e, "organization"));
  if (donorForm) donorForm.addEventListener("submit", (e) => createAccount(e, "donor"));
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  setupAuthHandlers();
  renderDashboard();
});
