const COLORS = [
  "#74b600",
  "#a8d564",
  "#c4e8a0",
  "#f9d134",
  "#f9a600",
  "#7b8d3c"
];

const defaultState = {
  role: "organization",
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
    { id: 8, org: "Oak Street Market", foodType: "Fruit boxes", pounds: 110, date: "Apr 5", time: "5:30 PM", location: "Plano", status: "Open", donor: "" }
  ],
  orgStats: {
    donationGrowth: {
      labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      values: [210, 245, 280, 330, 370, 410, 465],
      yLabel: "Pounds donated"
    },
    poundsByMonth: {
      labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      values: [180, 220, 265, 310, 355, 420],
      yLabel: "Pounds donated"
    },
    monthlyCount: {
      labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      values: [6, 8, 9, 12, 14, 18],
      yLabel: "Donation slots"
    },
    pickupDays: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      values: [4, 7, 10, 12, 9, 5],
      yLabel: "Pickups"
    },
    categoryBreakdown: [
      { label: "Prepared Meals", value: 42 },
      { label: "Produce", value: 30 },
      { label: "Bakery", value: 16 },
      { label: "Packaged Goods", value: 12 }
    ],
    hoverNotes: {
      donationGrowth: [
        "Steady rise after adding two repeat donor partners.",
        "Holiday season surplus increased donation volume.",
        "January stayed strong even after seasonal decline expectations.",
        "New weekly pickup structure improved consistency.",
        "Donation size increased because prepared meals were added twice weekly.",
        "March growth came from better slot fill rates.",
        "April became the strongest month so far."
      ],
      poundsByMonth: [
        "November was the baseline month.",
        "December rose with bakery and packaged goods overflow.",
        "January held momentum after winter holiday demand.",
        "February crossed 300 lbs.",
        "March improved thanks to more repeat pickups.",
        "April reached the current high point."
      ]
    }
  },
  donorStats: {
    receivedGrowth: {
      labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      values: [160, 195, 225, 275, 320, 370, 418],
      yLabel: "Pounds received"
    },
    pickupsByMonth: {
      labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      values: [5, 7, 8, 11, 13, 15],
      yLabel: "Completed pickups"
    },
    poundsByMonth: {
      labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      values: [140, 182, 230, 288, 336, 398],
      yLabel: "Pounds received"
    },
    pickupDays: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      values: [3, 6, 8, 10, 9, 4],
      yLabel: "Pickup count"
    },
    categoryBreakdown: [
      { label: "Produce", value: 36 },
      { label: "Prepared Meals", value: 34 },
      { label: "Bakery", value: 20 },
      { label: "Dairy", value: 10 }
    ],
    hoverNotes: {
      receivedGrowth: [
        "October established a stable intake pattern.",
        "November rose with stronger grocery rescue volume.",
        "December brought more bakery and packaged items.",
        "January improved with more scheduled pickups.",
        "February passed 300 lbs received.",
        "March had the best consistency rate.",
        "April became the strongest receiving month."
      ],
      poundsByMonth: [
        "November was the donor base month.",
        "December increased through holiday overflow.",
        "January remained steady after year-end transitions.",
        "February saw stronger produce intake.",
        "March introduced more repeat partnerships.",
        "April is currently the peak month."
      ]
    }
  }
};

let appState = loadState();

/* ========= STATE ========= */

function loadState() {
  const saved = localStorage.getItem("mealMatchData");
  return saved ? JSON.parse(saved) : structuredClone(defaultState);
}

function saveState() {
  localStorage.setItem("mealMatchData", JSON.stringify(appState));
}

/* ========= HELPERS ========= */

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.add("hidden"), 2200);
}

function getStatusClass(status) {
  return status.toLowerCase();
}

function openSlots() {
  return appState.slots.filter(slot => slot.status === "Open");
}

function renderBarChart(dataset, insightNotes = []) {
  const max = Math.max(...dataset.values);
  return `
    <div class="chart-shell">
      <div class="axis-y">${dataset.yLabel}</div>
      <div class="bar-chart">
        ${dataset.values.map((value, index) => {
          const color = COLORS[index % COLORS.length];
          const note = insightNotes[index] || `${dataset.labels[index]} recorded ${value}.`;
          return `
            <div class="bar-item">
              <div class="bar-value">${dataset.labels[index]}: ${value}<br>${note}</div>
              <div
                class="bar"
                style="height:${(value / max) * 180 + 18}px; background:${color};"
              ></div>
              <div class="bar-label">${dataset.labels[index]}</div>
            </div>
          `;
        }).join("")}
      </div>
      <div class="axis-x">Time period</div>
    </div>
  `;
}

function renderLineChart(dataset, notes = []) {
  const width = 600;
  const height = 220;
  const max = Math.max(...dataset.values);
  const step = width / (dataset.values.length - 1);

  const points = dataset.values.map((value, i) => {
    const x = i * step;
    const y = height - (value / max) * 180 - 20;
    return { x, y, value, label: dataset.labels[i], note: notes[i] || "" };
  });

  const polyline = points.map(p => `${p.x},${p.y}`).join(" ");

  return `
    <div class="chart-shell">
      <div class="axis-y">${dataset.yLabel}</div>
      <div class="line-chart-box">
        <div class="line-tooltip"></div>
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="#74b600"
            stroke-width="4"
            points="${polyline}"
          ></polyline>
          ${points.map((point, index) => `
            <circle
              class="chart-point"
              cx="${point.x}"
              cy="${point.y}"
              r="6"
              fill="${COLORS[index % COLORS.length]}"
              data-label="${point.label}"
              data-value="${point.value}"
              data-note="${point.note}"
            ></circle>
          `).join("")}
        </svg>
      </div>
      <div class="axis-x">Time period</div>
    </div>
  `;
}

function renderStackChart(items) {
  const total = items.reduce((sum, item) => sum + item.value, 0);

  return `
    <div class="chart-shell">
      <div class="stack-chart">
        ${items.map((item, index) => `
          <div class="stack-row">
            <div>${item.label}</div>
            <div class="stack-track">
              <div
                class="stack-fill"
                style="width:${(item.value / total) * 100}%; background:${COLORS[index % COLORS.length]};"
              ></div>
            </div>
            <div>${item.value}%</div>
          </div>
        `).join("")}
      </div>

      <div class="chart-legend">
        ${items.map((item, index) => `
          <div class="legend-item">
            <span class="legend-swatch" style="background:${COLORS[index % COLORS.length]};"></span>
            <span>${item.label}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderProfileRows(rows) {
  return rows.map(([label, value]) => `
    <div class="profile-row">
      <strong>${label}</strong>
      <span class="muted">${value}</span>
    </div>
  `).join("");
}

/* ========= HOME ========= */

function renderOrganizationHome() {
  const upcoming = appState.slots.filter(
    slot =>
      slot.org === appState.organizationUser.orgName &&
      (slot.status === "Open" || slot.status === "Filled")
  );

  return `
    <div class="portal-header">
      <div class="role-badge">Food Organization Portal</div>
      <h1>Welcome back, ${appState.organizationUser.contact}</h1>
      <div class="muted">${appState.organizationUser.orgName}</div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Total pounds donated</div>
        <div class="stat-number">3,860</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Donations this month</div>
        <div class="stat-number">18</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Upcoming pickups</div>
        <div class="stat-number">${upcoming.length}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Partner donors</div>
        <div class="stat-number">12</div>
      </div>
    </div>

    <div class="content-grid">
      <div class="list-card">
        <h3>Recent donations</h3>
        ${appState.donationHistory.map(item => `
          <div class="activity-item">
            <strong>${item.title}</strong>
            <div class="muted">${item.pounds} lbs · ${item.date} · Picked up by ${item.partner}</div>
          </div>
        `).join("")}
      </div>

      <div class="list-card">
        <h3>Upcoming pickup schedule</h3>
        ${upcoming.length ? upcoming.map(slot => `
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
    slot =>
      slot.donor === appState.donorUser.orgName &&
      (slot.status === "Filled" || slot.status === "Completed")
  );

  return `
    <div class="portal-header">
      <div class="role-badge">Food Donor Portal</div>
      <h1>Welcome back, ${appState.donorUser.contact}</h1>
      <div class="muted">${appState.donorUser.orgName}</div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Total pounds received</div>
        <div class="stat-number">2,940</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Pickups this month</div>
        <div class="stat-number">15</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Upcoming pickups</div>
        <div class="stat-number">${mine.filter(s => s.status === "Filled").length}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Active partners</div>
        <div class="stat-number">9</div>
      </div>
    </div>

    <div class="content-grid">
      <div class="list-card">
        <h3>Recent pickups</h3>
        ${appState.pickupsHistory.map(item => `
          <div class="activity-item">
            <strong>${item.title}</strong>
            <div class="muted">${item.pounds} lbs · ${item.date}</div>
          </div>
        `).join("")}
      </div>

      <div class="list-card">
        <h3>Available donation slots</h3>
        ${openSlots().slice(0, 4).map(slot => `
          <div class="slot-item">
            <div class="slot-main">
              <span class="tag open">Open</span>
              <strong>${slot.org}</strong>
              <div class="muted">${slot.foodType} · ${slot.pounds} lbs · ${slot.date} ${slot.time}</div>
            </div>
            <button onclick="signUpForSlot(${slot.id})">Sign Up</button>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

/* ========= DONATIONS ========= */

function renderOrganizationDonations() {
  const orgSlots = appState.slots.filter(slot => slot.org === appState.organizationUser.orgName);

  return `
    <div class="portal-header">
      <div class="role-badge">Food Organization Portal</div>
      <h1>Donation scheduling</h1>
      <div class="muted">${appState.organizationUser.orgName}</div>
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
          <button type="submit">Create Slot</button>
        </form>
      </div>

      <div class="list-card">
        <h3>Your donation slots</h3>
        ${orgSlots.length ? orgSlots.map(slot => `
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
  const mine = appState.slots.filter(slot => slot.donor === appState.donorUser.orgName);

  return `
    <div class="portal-header">
      <div class="role-badge">Food Donor Portal</div>
      <h1>Available opportunities</h1>
      <div class="muted">${appState.donorUser.orgName}</div>
    </div>

    <div class="content-grid">
      <div class="list-card">
        <h3>Open donation slots</h3>
        ${openSlots().map(slot => `
          <div class="slot-item">
            <div class="slot-main">
              <span class="tag open">Open</span>
              <strong>${slot.org}</strong>
              <div class="muted">${slot.foodType} · ${slot.pounds} lbs</div>
              <div class="muted">${slot.date} at ${slot.time} · ${slot.location}</div>
            </div>
            <button onclick="signUpForSlot(${slot.id})">Sign Up</button>
          </div>
        `).join("")}
      </div>

      <div class="list-card">
        <h3>My signed-up pickups</h3>
        ${mine.length ? mine.map(slot => `
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

/* ========= STATS ========= */

function renderOrganizationStats() {
  return `
    <div class="portal-header">
      <div class="role-badge">Food Organization Portal</div>
      <h1>Impact analytics</h1>
      <div class="muted">Detailed trends, performance signals, and donation insights</div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Monthly donation count</div>
        <div class="stat-number">18</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Average pounds per pickup</div>
        <div class="stat-number">54</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Slot fill rate</div>
        <div class="stat-number">88%</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Top pickup day</div>
        <div class="stat-number">Thu</div>
      </div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Donation growth over time</h3>
        <div class="chart-subtitle">Monthly pounds donated across the last seven periods</div>
        ${renderLineChart(appState.orgStats.donationGrowth, appState.orgStats.hoverNotes.donationGrowth)}
      </div>

      <div class="chart-card">
        <h3>Pounds donated by month</h3>
        <div class="chart-subtitle">Direct month-by-month donation volume</div>
        ${renderBarChart(appState.orgStats.poundsByMonth, appState.orgStats.hoverNotes.poundsByMonth)}
      </div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Food category breakdown</h3>
        <div class="chart-subtitle">Prepared meals remain the largest donation category</div>
        ${renderStackChart(appState.orgStats.categoryBreakdown)}
      </div>

      <div class="chart-card">
        <h3>Top pickup days</h3>
        <div class="chart-subtitle">Thursday is currently the strongest pickup day</div>
        ${renderBarChart(appState.orgStats.pickupDays, [
          "Monday is lighter and mostly recurring pickups.",
          "Tuesday begins stronger scheduling volume.",
          "Wednesday shows solid midweek demand.",
          "Thursday is the highest-performing pickup day.",
          "Friday stays strong before weekend operations.",
          "Saturday demand exists but is lower overall."
        ])}
      </div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Monthly donation count</h3>
        <div class="chart-subtitle">Number of posted donation opportunities each month</div>
        ${renderBarChart(appState.orgStats.monthlyCount, [
          "November opened the recent baseline.",
          "December added two more regular slots.",
          "January maintained steady activity.",
          "February showed a scheduling jump.",
          "March kept that pace consistent.",
          "April reached the current high."
        ])}
      </div>

      <div class="insight-card">
        <h3>Performance insights</h3>
        <div class="insight-grid">
          <div class="insight-box">
            <strong>+133%</strong>
            <div>Growth from first to latest month</div>
            <div class="insight-detail">Pounds donated rose from 180 to 420 over the six-month span.</div>
          </div>
          <div class="insight-box">
            <strong>42%</strong>
            <div>Prepared meals share</div>
            <div class="insight-detail">Prepared meals remain the top recovery category by volume.</div>
          </div>
          <div class="insight-box">
            <strong>88%</strong>
            <div>Slot fulfillment rate</div>
            <div class="insight-detail">Most posted slots are being claimed successfully by partners.</div>
          </div>
          <div class="insight-box">
            <strong>3,216</strong>
            <div>Estimated meals supported</div>
            <div class="insight-detail">This estimate helps judges connect pounds recovered to community impact.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDonorStats() {
  return `
    <div class="portal-header">
      <div class="role-badge">Food Donor Portal</div>
      <h1>Receiving analytics</h1>
      <div class="muted">Pickup behavior, intake trends, and distribution insights</div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Monthly pickups</div>
        <div class="stat-number">15</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Average pounds per pickup</div>
        <div class="stat-number">49</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Top pickup day</div>
        <div class="stat-number">Thu</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Partner organizations</div>
        <div class="stat-number">9</div>
      </div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Pounds received over time</h3>
        <div class="chart-subtitle">Receiving growth across the last seven periods</div>
        ${renderLineChart(appState.donorStats.receivedGrowth, appState.donorStats.hoverNotes.receivedGrowth)}
      </div>

      <div class="chart-card">
        <h3>Completed pickups by month</h3>
        <div class="chart-subtitle">Monthly pickup count completed by the donor organization</div>
        ${renderBarChart(appState.donorStats.pickupsByMonth, [
          "November established the recent pickup baseline.",
          "December added stronger consistency.",
          "January remained steady post-holiday.",
          "February crossed double-digit monthly pickups.",
          "March improved partner reliability.",
          "April is currently the strongest month."
        ])}
      </div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Category breakdown</h3>
        <div class="chart-subtitle">Produce and prepared meals are the largest intake categories</div>
        ${renderStackChart(appState.donorStats.categoryBreakdown)}
      </div>

      <div class="chart-card">
        <h3>Top pickup days</h3>
        <div class="chart-subtitle">Thursday and Friday are the most active donor pickup days</div>
        ${renderBarChart(appState.donorStats.pickupDays, [
          "Monday has limited pickup scheduling.",
          "Tuesday rises with recurring routes.",
          "Wednesday becomes more active.",
          "Thursday is the strongest day for claims.",
          "Friday remains high before weekend slowdown.",
          "Saturday is lower but still active."
        ])}
      </div>
    </div>

    <div class="content-grid">
      <div class="chart-card">
        <h3>Pounds received by month</h3>
        <div class="chart-subtitle">Total recovered pounds brought in each month</div>
        ${renderBarChart(appState.donorStats.poundsByMonth, appState.donorStats.hoverNotes.poundsByMonth)}
      </div>

      <div class="insight-card">
        <h3>Recipient insights</h3>
        <div class="insight-grid">
          <div class="insight-box">
            <strong>+184%</strong>
            <div>Growth since first month</div>
            <div class="insight-detail">Pounds received rose from 140 to 398 over the current period.</div>
          </div>
          <div class="insight-box">
            <strong>36%</strong>
            <div>Produce share</div>
            <div class="insight-detail">Produce is the highest-volume category received so far.</div>
          </div>
          <div class="insight-box">
            <strong>94%</strong>
            <div>On-time pickup rate</div>
            <div class="insight-detail">This shows strong consistency and operational reliability.</div>
          </div>
          <div class="insight-box">
            <strong>2,450</strong>
            <div>Estimated meals distributed</div>
            <div class="insight-detail">This connects logistics performance to direct community service.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ========= PROFILE ========= */

function renderOrganizationProfile() {
  const u = appState.organizationUser;
  return `
    <div class="portal-header">
      <div class="role-badge">Food Organization Portal</div>
      <h1>Your organization profile</h1>
      <div class="muted">${u.orgName}</div>
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
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  `;
}

function renderDonorProfile() {
  const u = appState.donorUser;
  return `
    <div class="portal-header">
      <div class="role-badge">Food Donor Portal</div>
      <h1>Your organization profile</h1>
      <div class="muted">${u.orgName}</div>
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
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  `;
}

/* ========= ACTIONS ========= */

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
  const slot = appState.slots.find(s => s.id === id);
  if (!slot) return;
  slot.status = "Filled";
  slot.donor = "Hope Community Pantry";
  saveState();
  renderDashboard();
  showToast("Slot reserved by Hope Community Pantry.");
}

function signUpForSlot(id) {
  const slot = appState.slots.find(s => s.id === id);
  if (!slot || slot.status !== "Open") return;
  slot.status = "Filled";
  slot.donor = appState.donorUser.orgName;
  saveState();
  renderDashboard();
  showToast("Pickup scheduled successfully.");
}

function cancelSignup(id) {
  const slot = appState.slots.find(s => s.id === id);
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

/* ========= TOOLTIP INTERACTION ========= */

function bindLineTooltips() {
  const chartBoxes = document.querySelectorAll(".line-chart-box");

  chartBoxes.forEach(box => {
    const tooltip = box.querySelector(".line-tooltip");
    const points = box.querySelectorAll(".chart-point");

    points.forEach(point => {
      point.addEventListener("mouseenter", () => {
        const label = point.dataset.label;
        const value = point.dataset.value;
        const note = point.dataset.note;
        tooltip.innerHTML = `<strong>${label}</strong>: ${value}<br>${note}`;
        tooltip.style.display = "block";

        const boxRect = box.getBoundingClientRect();
        const pointX = (point.cx.baseVal.value / 600) * box.clientWidth;
        const pointY = (point.cy.baseVal.value / 220) * 220;

        tooltip.style.left = `${pointX}px`;
        tooltip.style.top = `${pointY}px`;
      });

      point.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
      });
    });
  });
}

/* ========= BINDINGS ========= */

function bindEvents() {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
      link.classList.add("active");
      appState.section = link.dataset.section;
      saveState();
      renderDashboard();
    });
  });

  const createSlotForm = document.getElementById("createSlotForm");
  if (createSlotForm) {
    createSlotForm.addEventListener("submit", createSlot);
  }

  const orgProfileForm = document.getElementById("orgProfileForm");
  if (orgProfileForm) {
    orgProfileForm.addEventListener("submit", e => saveProfile(e, "organization"));
  }

  const donorProfileForm = document.getElementById("donorProfileForm");
  if (donorProfileForm) {
    donorProfileForm.addEventListener("submit", e => saveProfile(e, "donor"));
  }

  bindLineTooltips();
}

/* ========= RENDER ========= */

function renderDashboard() {
  const portalContent = document.getElementById("portalContent");
  if (!portalContent) return;

  if (appState.role === "organization") {
    if (appState.section === "home") portalContent.innerHTML = renderOrganizationHome();
    if (appState.section === "donations") portalContent.innerHTML = renderOrganizationDonations();
    if (appState.section === "stats") portalContent.innerHTML = renderOrganizationStats();
    if (appState.section === "profile") portalContent.innerHTML = renderOrganizationProfile();
  } else {
    if (appState.section === "home") portalContent.innerHTML = renderDonorHome();
    if (appState.section === "donations") portalContent.innerHTML = renderDonorDonations();
    if (appState.section === "stats") portalContent.innerHTML = renderDonorStats();
    if (appState.section === "profile") portalContent.innerHTML = renderDonorProfile();
  }

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.section === appState.section);
  });

  bindEvents();
}

renderDashboard();