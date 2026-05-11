/* ============ DATA ============ */
const doctors = [
    { id: 1, name: "Dr. Vikram Malhotra", spec: "Cardiologist", exp: 18, phone: "9810022334", addr: "Sec-128, Noida", rate: 4.9, icon: "heart-pulse" },
    { id: 2, name: "Dr. Ananya Iyer", spec: "Dermatologist", exp: 12, phone: "9871122334", addr: "Sec-18, Noida", rate: 4.7, icon: "hand-dots" },
    { id: 3, name: "Dr. Rajesh Chauhan", spec: "Pediatrician", exp: 20, phone: "9910044556", addr: "Sec-62, Noida", rate: 5.0, icon: "baby" },
    { id: 4, name: "Dr. S. K. Gupta", spec: "Neurologist", exp: 15, phone: "8822334455", addr: "Sec-27, Noida", rate: 4.8, icon: "brain" },
    { id: 5, name: "Dr. Pooja Mehra", spec: "Dentist", exp: 8, phone: "9988776655", addr: "Sec-15, Noida", rate: 4.6, icon: "tooth" },
    { id: 6, name: "Dr. Amit Tyagi", spec: "Orthopedic", exp: 22, phone: "7042334411", addr: "Sec-110, Noida", rate: 4.9, icon: "bone" },
    { id: 7, name: "Dr. Neha Bhasin", spec: "Gynecologist", exp: 14, phone: "9011223344", addr: "Sec-50, Noida", rate: 4.7, icon: "person-pregnant" },
    { id: 8, name: "Dr. Rahul Sharma", spec: "Cardiologist", exp: 10, phone: "9811223344", addr: "Sec-62, Noida", rate: 4.8, icon: "heart-pulse" }
];

const labs = [
    { id: 101, name: "PathKind Noida", dr: "Dr. S. Pathak", tests: "X-Ray, Blood, CT", phone: "0120-445566", addr: "Sec-62, Noida" },
    { id: 102, name: "Apollo Diagnostics", dr: "Dr. Verma", tests: "Ultrasound, CBC", phone: "0120-223311", addr: "Sec-18, Noida" },
    { id: 103, name: "City Imaging Center", dr: "Dr. Gupta", tests: "MRI, ECG, BMD", phone: "0120-998877", addr: "Sec-128, Noida" }
];

let activeTarget = null;
let currentReceiptData = null;

/* ============ CORE NAVIGATION ============ */
function showSection(id) {
    document.querySelectorAll('.view-section').forEach(s => s.classList.add('d-none'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const sec = document.getElementById('sec-' + id);
    if(sec) sec.classList.remove('d-none');
    const tab = document.getElementById('tab-' + id);
    if(tab) tab.classList.add('active');
    window.scrollTo(0,0);
}

/* ============ RENDERERS ============ */
function renderDoctors(data = doctors) {
    const list = document.getElementById('doctor-list');
    list.innerHTML = data.map(doc => `
        <div class="col-md-4">
            <div class="glass pro-card p-4">
                <div class="d-flex align-items-center mb-3">
                    <div class="bg-primary-subtle p-3 rounded-circle me-3"><i class="fa-solid fa-${doc.icon} text-primary fs-4"></i></div>
                    <div><h6 class="fw-bold mb-0">${doc.name}</h6><small class="text-primary">${doc.spec}</small></div>
                </div>
                <p class="small text-muted mb-2"><i class="fa-solid fa-location-dot me-2"></i>${doc.addr}</p>
                <p class="small fw-bold mb-3 text-warning"><i class="fa-solid fa-star me-2"></i>${doc.rate} | ${doc.exp}Y Exp</p>
                <div class="d-flex gap-2">
                    <a href="tel:${doc.phone}" class="btn btn-light btn-sm border"><i class="fa-solid fa-phone"></i></a>
                    <button class="btn btn-grad btn-sm flex-grow-1" onclick="openBooking('${doc.name}', 'Doctor')">Book Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderLabs() {
    const list = document.getElementById('lab-list');
    list.innerHTML = labs.map(lab => `
        <div class="col-md-6">
            <div class="glass pro-card p-4 border-start border-primary border-5">
                <h5 class="fw-bold">${lab.name}</h5>
                <p class="text-primary mb-2">Director: ${lab.dr}</p>
                <p class="small text-muted"><i class="fa-solid fa-flask-vial me-2"></i>${lab.tests}</p>
                <p class="small text-muted mb-3"><i class="fa-solid fa-map-pin me-2"></i>${lab.addr}</p>
                <div class="d-flex gap-2">
                    <a href="tel:${lab.phone}" class="btn btn-light btn-sm border px-3"><i class="fa-solid fa-phone"></i></a>
                    <button class="btn btn-outline-primary btn-sm flex-grow-1 fw-bold" onclick="openBooking('${lab.name}', 'Lab')">Schedule Test</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterDoctors() {
    const spec = document.getElementById('specSelect').value;
    const filtered = spec === "All" ? doctors : doctors.filter(d => d.spec === spec);
    renderDoctors(filtered);
}

/* ============ BOOKING CORE ============ */
function openBooking(name, type) {
    activeTarget = { name, type };
    document.getElementById('book-target').innerText = "Booking: " + name;
    new bootstrap.Modal('#bookModal').show();
}

function finalizeBooking() {
    const pat = {
        name: document.getElementById('patName').value,
        dob: document.getElementById('patDOB').value,
        phone: document.getElementById('patPhone').value,
        problem: document.getElementById('patProblem').value
    };

    if(!pat.name || !pat.phone) return alert("Please enter Name and Phone.");

    const bookingId = "MP-" + Math.floor(100000 + Math.random() * 900000);
    const data = { ...activeTarget, ...pat, id: bookingId, date: new Date().toLocaleString() };
    currentReceiptData = data;

    const history = JSON.parse(localStorage.getItem('mp_records') || '[]');
    history.unshift(data);
    localStorage.setItem('mp_records', JSON.stringify(history));

    bootstrap.Modal.getInstance('#bookModal').hide();
    showReceipt(data);
    renderRecords();
}

function showReceipt(data) {
    const content = `
        <div class="row g-2 text-dark">
            <div class="col-6"><strong>Slip No:</strong><br>${data.id}</div>
            <div class="col-6"><strong>Date:</strong><br>${data.date.split(',')[0]}</div>
            <div class="col-12 mt-3 text-primary"><strong>APPOINTMENT WITH:</strong><br><h5>${data.name} (${data.type})</h5></div>
            <hr>
            <div class="col-6 small">Name: ${data.name}</div>
            <div class="col-6 small">DOB: ${data.dob}</div>
            <div class="col-12 mt-2 small"><strong>CHIEF COMPLAINT:</strong><br>${data.problem || 'Routine Checkup'}</div>
        </div>
    `;
    document.getElementById('receiptContent').innerHTML = content;
    new bootstrap.Modal('#receiptModal').show();
}

function downloadReceiptPDF() {
    const element = document.getElementById('printableReceipt');
    const opt = {
        margin: 10,
        filename: `MedPulse_Slip_${currentReceiptData.id}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

function renderRecords() {
    const history = JSON.parse(localStorage.getItem('mp_records') || '[]');
    const list = document.getElementById('records-list');
    list.innerHTML = history.length ? history.map(h => `
        <div class="col-md-6">
            <div class="glass p-3 d-flex justify-content-between align-items-center">
                <div><h6 class="mb-0 fw-bold">${h.name}</h6><small class="text-muted">${h.id}</small></div>
                <button class="btn btn-sm btn-outline-primary" onclick='showReceipt(${JSON.stringify(h)})'>View Slip</button>
            </div>
        </div>
    `).join('') : '<p class="text-muted">No appointments found.</p>';
}

/* ============ AI CONSULTATION ============ */
async function askAI() {
    const input = document.getElementById('ai-input');
    const box = document.getElementById('chat-flow');
    const text = input.value.trim();
    if(!text) return;

    box.innerHTML += `<div class="text-end mb-3"><span class="bg-primary text-white p-2 px-3 rounded-3 d-inline-block shadow-sm">${text}</span></div>`;
    input.value = "";

    setTimeout(() => {
        box.innerHTML += `
            <div class="mb-3">
                <div class="bg-white p-3 rounded-3 border shadow-sm text-dark">
                    <p class="fw-bold text-danger mb-1"><i class="fa-solid fa-shield-halved me-2"></i>API Access Restricted</p>
                    <p class="small mb-2">The Groq API Key has been removed for security. Access is available in production versions.</p>
                </div>
            </div>`;
        box.scrollTop = box.scrollHeight;
    }, 600);
}

function downloadChat() {
    const element = document.getElementById('chat-flow');
    html2pdf().from(element).save('Consultation_Log.pdf');
}

/* ============ HEALTH SUITE TOOLS ============ */
function openTool(type) {
    const content = document.getElementById('tool-content');
    let html = "";
    
    switch(type) {
        case 'bmi':
            html = `<h4>BMI Calculator</h4>
                    <input type="number" id="tw" class="form-control mb-2" placeholder="Weight (kg)">
                    <input type="number" id="th" class="form-control mb-3" placeholder="Height (cm)">
                    <button class="btn btn-primary w-100" onclick="calcBMI()">Calculate</button>
                    <div id="tr" class="mt-3 text-center"></div>`;
            break;
        case 'water':
            html = `<h4>Water Goal</h4>
                    <div class="progress mb-3" style="height: 25px;"><div id="water-bar" class="progress-bar" style="width: 0%;">0%</div></div>
                    <button class="btn btn-primary w-100" onclick="updateWaterGoal()">Add Glass</button>
                    <button class="btn btn-link btn-sm w-100 mt-2 text-danger" onclick="resetWater()">Reset</button>`;
            setTimeout(refreshWaterBar, 100);
            break;
        case 'calorie':
            html = `<h4>Calorie Needs</h4>
                    <input type="number" id="tc-age" class="form-control mb-2" placeholder="Age">
                    <select id="tc-gen" class="form-select mb-2"><option value="m">Male</option><option value="f">Female</option></select>
                    <input type="number" id="tc-w" class="form-control mb-2" placeholder="Weight (kg)">
                    <input type="number" id="tc-h" class="form-control mb-3" placeholder="Height (cm)">
                    <button class="btn btn-primary w-100" onclick="calcCalories()">Calculate</button>
                    <div id="tr" class="mt-3 text-center"></div>`;
            break;
        case 'bp':
            html = `<h4>BP Tracker</h4>
                    <input type="number" id="ts" class="form-control mb-2" placeholder="Systolic">
                    <input type="number" id="td" class="form-control mb-2" placeholder="Diastolic">
                    <button class="btn btn-primary w-100" onclick="checkBP()">Check</button>
                    <h5 id="tr" class="mt-3 text-center"></h5>`;
            break;
        case 'age':
            html = `<h4>Age Calc</h4><input type="date" id="tdob" class="form-control mb-3"><button class="btn btn-primary w-100" onclick="calcAge()">Calc</button><h3 id="tr" class="mt-3 text-center"></h3>`;
            break;
        case 'temp':
            html = `<h4>Fever Checker</h4><input type="number" id="t-temp" class="form-control mb-3" placeholder="°F"><button class="btn btn-primary w-100" onclick="checkFever()">Check</button><h4 id="tr" class="mt-3 text-center"></h4>`;
            break;
        case 'sugar':
            html = `<h4>Blood Sugar</h4>
                    <select id="tsugar-type" class="form-select mb-2"><option value="fasting">Fasting</option><option value="pp">Post Meal</option></select>
                    <input type="number" id="tsugar-val" class="form-control mb-3" placeholder="mg/dL">
                    <button class="btn btn-primary w-100" onclick="checkSugar()">Check</button>
                    <h5 id="tr" class="mt-3 text-center"></h5>`;
            break;
        case 'preg':
            html = `<h4>Due Date</h4><input type="date" id="tpreg-date" class="form-control mb-3"><button class="btn btn-primary w-100" onclick="calcDueDate()">Calculate</button><div id="tr" class="mt-3 text-center"></div>`;
            break;
    }
    content.innerHTML = html;
    new bootstrap.Modal('#toolModal').show();
}

/* ============ TOOL HELPERS ============ */
function calcBMI() {
    const w = document.getElementById('tw').value; const h = document.getElementById('th').value / 100;
    if(!w || !h) return;
    const bmi = (w / (h * h)).toFixed(1);
    document.getElementById('tr').innerHTML = `<h2>${bmi}</h2>`;
}
function updateWaterGoal() { let c = parseInt(localStorage.getItem('mp_water') || 0); localStorage.setItem('mp_water', ++c); refreshWaterBar(); }
function refreshWaterBar() { 
    const c = parseInt(localStorage.getItem('mp_water') || 0); const pct = Math.min((c / 8) * 100, 100);
    const b = document.getElementById('water-bar'); if(b) { b.style.width = pct + "%"; b.innerText = pct + "%"; }
}
function resetWater() { localStorage.setItem('mp_water', 0); refreshWaterBar(); }
function calcCalories() {
    const w = document.getElementById('tc-w').value; const h = document.getElementById('tc-h').value;
    const a = document.getElementById('tc-age').value; const g = document.getElementById('tc-gen').value;
    let bmr = (10 * w) + (6.25 * h) - (5 * a); bmr = (g === 'm') ? bmr + 5 : bmr - 161;
    document.getElementById('tr').innerHTML = `<h3>${Math.round(bmr * 1.2)} kcal</h3>`;
}
function checkBP() {
    const s = document.getElementById('ts').value; const d = document.getElementById('td').value;
    document.getElementById('tr').innerText = (s >= 140 || d >= 90) ? "Hypertension" : "Normal";
}
function calcAge() {
    const dob = new Date(document.getElementById('tdob').value);
    const diff = new Date() - dob;
    document.getElementById('tr').innerText = Math.floor(diff / 31557600000) + " Years";
}
function checkFever() {
    const t = document.getElementById('t-temp').value;
    document.getElementById('tr').innerHTML = t > 100.4 ? "Fever" : "Normal";
}
function checkSugar() {
    const val = document.getElementById('tsugar-val').value;
    document.getElementById('tr').innerHTML = val < 100 ? "Normal" : "High";
}
function calcDueDate() {
    const lmp = new Date(document.getElementById('tpreg-date').value);
    let d = new Date(lmp); d.setDate(d.getDate() + 280);
    document.getElementById('tr').innerHTML = `<h4>${d.toDateString()}</h4>`;
}

// Theme & Init
document.getElementById('theme-toggle').onclick = () => {
    const t = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
};
renderDoctors(); renderLabs(); renderRecords();