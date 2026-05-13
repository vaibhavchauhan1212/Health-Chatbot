/* ============ DATA ============ */
/* ============ DATA ============ */
const doctors = [
    { id: 1, name: "Dr. Vikram Malhotra", spec: "Cardiologist", exp: 18, phone: "9810022334", addr: "Sec-128, Noida", rate: 4.9, icon: "heart-pulse" },
    { id: 2, name: "Dr. Ananya Iyer", spec: "Dermatologist", exp: 12, phone: "9871122334", addr: "Sec-18, Noida", rate: 4.7, icon: "hand-dots" },
    { id: 3, name: "Dr. Rajesh Chauhan", spec: "Pediatrician", exp: 20, phone: "9910044556", addr: "Sec-62, Noida", rate: 5.0, icon: "baby" },
    { id: 4, name: "Dr. S. K. Gupta", spec: "Neurologist", exp: 15, phone: "8822334455", addr: "Sec-27, Noida", rate: 4.8, icon: "brain" },
    { id: 5, name: "Dr. Pooja Mehra", spec: "Dentist", exp: 8, phone: "9988776655", addr: "Sec-15, Noida", rate: 4.6, icon: "tooth" },
    { id: 6, name: "Dr. Amit Tyagi", spec: "Orthopedic", exp: 22, phone: "7042334411", addr: "Sec-110, Noida", rate: 4.9, icon: "bone" },
    { id: 7, name: "Dr. Neha Bhasin", spec: "Gynecologist", exp: 14, phone: "9011223344", addr: "Sec-50, Noida", rate: 4.7, icon: "person-pregnant" },
    { id: 8, name: "Dr. Rahul Sharma", spec: "Cardiologist", exp: 10, phone: "9811223344", addr: "Sec-62, Noida", rate: 4.8, icon: "heart-pulse" },
    { id: 9, name: "Dr. Shalini Varma", spec: "Dermatologist", exp: 11, phone: "9654112233", addr: "Sec-93, Noida", rate: 4.5, icon: "hand-dots" },
    { id: 10, name: "Dr. Kunal Kapoor", spec: "Pediatrician", exp: 16, phone: "9560114422", addr: "Sec-137, Noida", rate: 4.9, icon: "baby" },
    { id: 11, name: "Dr. Meenakshi Joshi", spec: "Neurologist", exp: 13, phone: "8745009988", addr: "Sec-76, Noida", rate: 4.7, icon: "brain" },
    { id: 12, name: "Dr. Vivek Agrawal", spec: "Orthopedic", exp: 19, phone: "9818334455", addr: "Sec-34, Noida", rate: 4.8, icon: "bone" },
    { id: 13, name: "Dr. Rohan Nanda", spec: "Cardiologist", exp: 25, phone: "9911882233", addr: "Sec-44, Noida", rate: 5.0, icon: "heart-pulse" },
    { id: 14, name: "Dr. Kriti Saxena", spec: "Dermatologist", exp: 7, phone: "9311445566", addr: "Sec-22, Noida", rate: 4.4, icon: "hand-dots" },
    { id: 15, name: "Dr. Abhinav Mishra", spec: "Pediatrician", exp: 9, phone: "9212334455", addr: "Sec-120, Noida", rate: 4.6, icon: "baby" }
];

const labs = [
    { id: 101, name: "PathKind Noida", dr: "Dr. S. Pathak", tests: "X-Ray, Blood Profile, CT Scan", phone: "0120-445566", addr: "Sec-62, Noida" },
    { id: 102, name: "Apollo Diagnostics", dr: "Dr. R. Verma", tests: "Ultrasound, CBC, Lipid Profile", phone: "0120-223311", addr: "Sec-18, Noida" },
    { id: 103, name: "City Imaging Center", dr: "Dr. A. Gupta", tests: "MRI, ECG, Bone Mineral Density (BMD)", phone: "0120-998877", addr: "Sec-128, Noida" },
    { id: 104, name: "Dr. Lal PathLabs", dr: "Dr. N. Sharma", tests: "HbA1c, Thyroid Profile, Liver Function Test", phone: "0120-334455", addr: "Sec-50, Noida" },
    { id: 105, name: "Max Labs", dr: "Dr. K. Anand", tests: "Kidney Function Test, Urine Culture, Vitamin D3", phone: "0120-776655", addr: "Sec-15, Noida" },
    { id: 106, name: "SRL Diagnostics", dr: "Dr. Preeti Malik", tests: "Allergy Panels, Double Marker, Dengue Serology", phone: "0120-889900", addr: "Sec-110, Noida" },
    { id: 107, name: "Mahajan Imaging", dr: "Dr. V. Mahajan", tests: "3D Mammography, HRCT Chest, Echo", phone: "0120-554433", addr: "Sec-27, Noida" },
    { id: 108, name: "Thyrocare Noida Center", dr: "Dr. J. Rao", tests: "Full Body Checkup, Iron Profile, Zinc Assay", phone: "0120-112233", addr: "Sec-22, Noida" },
    { id: 109, name: "Medanta Labs", dr: "Dr. Gaurav Joshi", tests: "Cardiac Biomarkers, Endoscopy Biopsy, PCR", phone: "0120-443322", addr: "Sec-137, Noida" },
    { id: 110, name: "Metropolis Healthcare", dr: "Dr. Smita Desai", tests: "Coagulation Profile, PAP Smear, RA Factor", phone: "0120-665544", addr: "Sec-76, Noida" }
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
    const pName = document.getElementById('patName').value;
    const pPhone = document.getElementById('patPhone').value;
    const pDOB = document.getElementById('patDOB').value;
    const pProblem = document.getElementById('patProblem').value;

    if(!pName || !pPhone) return alert("Please enter Name and Phone.");

    const bookingId = "MP-" + Math.floor(100000 + Math.random() * 900000);
    
    // Create a clean data object without collisions
    const data = { 
        id: bookingId,
        date: new Date().toLocaleString(),
        providerName: activeTarget.name, // Doctor/Lab name
        type: activeTarget.type,
        patientName: pName,
        dob: pDOB,
        phone: pPhone,
        problem: pProblem || 'Routine Checkup'
    };

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
            <div class="col-12 mt-3 text-primary"><strong>APPOINTMENT WITH:</strong><br><h5 class="fw-bold">${data.providerName} (${data.type})</h5></div>
            <hr>
            <div class="col-12 small fw-bold text-muted text-uppercase">Patient Details</div>
            <div class="col-6 small"><strong>Name:</strong> ${data.patientName}</div>
            <div class="col-6 small"><strong>DOB:</strong> ${data.dob || 'N/A'}</div>
            <div class="col-12 mt-2 small"><strong>CHIEF COMPLAINT:</strong><br>${data.problem}</div>
        </div>
    `;
    document.getElementById('receiptContent').innerHTML = content;
    new bootstrap.Modal('#receiptModal').show();
}

function downloadReceiptPDF() {
    const element = document.getElementById('printableReceipt');
    
    const opt = {
        margin:       10,
        filename:     `MedPulse_Slip_${currentReceiptData.id}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // This ensures the element is captured even if it's currently animating
    html2pdf().set(opt).from(element).save();
}

function renderRecords() {
    const history = JSON.parse(localStorage.getItem('mp_records') || '[]');
    const list = document.getElementById('records-list');
    
    list.innerHTML = history.length ? history.map(h => `
        <div class="col-md-6">
            <div class="glass p-3 d-flex justify-content-between align-items-center shadow-sm">
                <div>
                    <!-- Updated to use providerName instead of name -->
                    <h6 class="mb-0 fw-bold text-primary">${h.providerName || 'General Appointment'}</h6>
                    <small class="text-muted">${h.id} | ${h.date ? h.date.split(',')[0] : 'No Date'}</small>
                    <div class="x-small text-secondary">Patient: ${h.patientName || 'N/A'}</div>
                </div>
                <button class="btn btn-sm btn-outline-primary rounded-pill px-3" onclick='showReceipt(${JSON.stringify(h)})'>
                    View Slip
                </button>
            </div>
        </div>
    `).join('') : '<p class="text-muted text-center py-4">No appointments found in your history.</p>';
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
    
    const toolHeader = (icon, title) => `
        <div class="text-center mb-4">
            <div class="bg-primary-subtle d-inline-block p-3 rounded-circle mb-2">
                <i class="fa-solid ${icon} text-primary fs-3"></i>
            </div>
            <h4 class="fw-bold text-dark">${title}</h4>
        </div>`;

    switch(type) {
        // Original 8 Tools
        case 'bmi':
            html = toolHeader('fa-weight-scale', 'BMI Calculator') + `
                <div class="p-2">
                    <label class="small fw-bold">Weight (kg)</label><input type="number" id="tw" class="form-control mb-2 py-2" placeholder="e.g. 70">
                    <label class="small fw-bold">Height (cm)</label><input type="number" id="th" class="form-control mb-3 py-2" placeholder="e.g. 175">
                    <button class="btn btn-grad w-100 py-2 fw-bold" onclick="calcBMI()">Analyze BMI</button>
                    <div id="tr" class="mt-4 text-center"></div>
                </div>`;
            break;
        case 'water':
            html = toolHeader('fa-droplet', 'Hydration Tracker') + `
                <div class="p-2 text-center">
                    <p class="text-muted small mb-4">Base Target: 8 Glasses (2 Liters)</p>
                    <div class="progress mb-4 shadow-sm" style="height: 35px; border-radius: 20px;">
                        <div id="water-bar" class="progress-bar progress-bar-striped progress-bar-animated bg-info" style="width: 0%;">0%</div>
                    </div>
                    <div class="d-flex gap-2">
                        <button class="btn btn-grad flex-grow-1 py-3" onclick="updateWaterGoal()"><i class="fa-solid fa-plus me-2"></i>Add Glass</button>
                        <button class="btn btn-outline-danger" onclick="resetWater()"><i class="fa-solid fa-rotate"></i></button>
                    </div>
                </div>`;
            setTimeout(refreshWaterBar, 100);
            break;
        case 'calorie':
            html = toolHeader('fa-utensils', 'Calorie Estimator') + `
                <div class="row g-2">
                    <div class="col-6 mb-2"><label class="small fw-bold">Age</label><input type="number" id="tc-age" class="form-control" placeholder="Years"></div>
                    <div class="col-6 mb-2"><label class="small fw-bold">Gender</label><select id="tc-gen" class="form-select"><option value="m">Male</option><option value="f">Female</option></select></div>
                    <div class="col-6 mb-3"><label class="small fw-bold">Weight (kg)</label><input type="number" id="tc-w" class="form-control"></div>
                    <div class="col-6 mb-3"><label class="small fw-bold">Height (cm)</label><input type="number" id="tc-h" class="form-control"></div>
                </div>
                <button class="btn btn-grad w-100 py-2 mt-2" onclick="calcCalories()">Estimate Needs</button>
                <div id="tr" class="mt-3 text-center"></div>`;
            break;
        case 'bp':
            html = toolHeader('fa-heart-pulse', 'Blood Pressure Tracker') + `
                <div class="row g-3 mb-4">
                    <div class="col-6 text-center"><label class="small fw-bold d-block">Systolic (Top)</label><input type="number" id="ts" class="form-control text-center" placeholder="120"></div>
                    <div class="col-6 text-center"><label class="small fw-bold d-block">Diastolic (Bottom)</label><input type="number" id="td" class="form-control text-center" placeholder="80"></div>
                </div>
                <button class="btn btn-grad w-100 py-2" onclick="checkBP()">Analyze Category</button>
                <div id="tr" class="mt-4 text-center"></div>`;
            break;
        case 'age':
            html = toolHeader('fa-calendar-day', 'Age Calculator') + `<div class="p-2"><input type="date" id="tdob" class="form-control mb-3"><button class="btn btn-grad w-100 py-2" onclick="calcAge()">Calculate Exact Age</button><div id="tr" class="mt-4 text-center"></div></div>`;
            break;
        case 'temp':
            html = toolHeader('fa-thermometer', 'Fever Checker') + `<div class="p-2"><input type="number" step="0.1" id="t-temp" class="form-control mb-3 text-center fs-4" placeholder="98.6"><button class="btn btn-grad w-100 py-2" onclick="checkFever()">Check Status</button><div id="tr" class="mt-4 text-center"></div></div>`;
            break;
        case 'sugar':
            html = toolHeader('fa-syringe', 'Blood Sugar Analysis') + `
                <div class="p-2">
                    <select id="tsugar-type" class="form-select mb-2"><option value="fasting">Fasting</option><option value="pp">Post Meal (2hrs)</option></select>
                    <input type="number" id="tsugar-val" class="form-control mb-3" placeholder="Level (mg/dL)">
                    <button class="btn btn-grad w-100 py-2" onclick="checkSugar()">Check Levels</button><div id="tr" class="mt-4 text-center"></div>
                </div>`;
            break;
        case 'preg':
            html = toolHeader('fa-baby', 'Due Date Calculator') + `<div class="p-2"><input type="date" id="tpreg-date" class="form-control mb-3"><button class="btn btn-grad w-100 py-2" onclick="calcDueDate()">Calculate Delivery Date</button><div id="tr" class="mt-4 text-center"></div></div>`;
            break;

        // 12 New Advanced Tools
        case 'heartrate':
            html = toolHeader('fa-wave-square', 'Heart Rate Monitor') + `
                <div class="p-2">
                    <label class="small fw-bold">Resting Heart Rate (BPM)</label>
                    <input type="number" id="thr-val" class="form-control mb-3 text-center fs-4" placeholder="e.g. 72">
                    <button class="btn btn-grad w-100 py-2" onclick="checkHeartRate()">Evaluate Pulse</button>
                    <div id="tr" class="mt-4 text-center"></div>
                </div>`;
            break;
        case 'sleep':
            html = toolHeader('fa-moon', 'Sleep Cycle Optimizer') + `
                <div class="p-2">
                    <label class="small fw-bold">Target Wake-Up Time</label>
                    <input type="time" id="tsleep-time" class="form-control mb-3 text-center" value="07:00">
                    <button class="btn btn-grad w-100 py-2" onclick="calcSleepCycles()">Calculate Bedtimes</button>
                    <div id="tr" class="mt-3 text-start small"></div>
                </div>`;
            break;
        case 'steps':
            html = toolHeader('fa-shoe-prints', 'Daily Step Target Tracker') + `
                <div class="p-2">
                    <label class="small fw-bold">Steps Walked Today</label>
                    <input type="number" id="tstep-val" class="form-control mb-3 text-center" placeholder="e.g. 6000">
                    <button class="btn btn-grad w-100 py-2" onclick="trackSteps()">Log Activity</button>
                    <div id="tr" class="mt-4"></div>
                </div>`;
            break;
        case 'idealweight':
            html = toolHeader('fa-scale-balanced', 'Ideal Body Weight (IBW)') + `
                <div class="p-2">
                    <div class="row g-2 mb-3">
                        <div class="col-6"><label class="small fw-bold">Gender</label><select id="tiw-gen" class="form-select"><option value="m">Male</option><option value="f">Female</option></select></div>
                        <div class="col-6"><label class="small fw-bold">Height (cm)</label><input type="number" id="tiw-h" class="form-control" placeholder="175"></div>
                    </div>
                    <button class="btn btn-grad w-100 py-2" onclick="calcIdealWeight()">Calculate IBW Range</button>
                    <div id="tr" class="mt-4 text-center"></div>
                </div>`;
            break;
        case 'bodyfat':
            html = toolHeader('fa-percent', 'U.S. Navy Body Fat Calculator') + `
                <div class="row g-2 mb-3">
                    <div class="col-6"><label class="small fw-bold">Age</label><input type="number" id="tbf-age" class="form-control" placeholder="21"></div>
                    <div class="col-6"><label class="small fw-bold">Gender</label><select id="tbf-gen" class="form-select"><option value="m">Male</option><option value="f">Female</option></select></div>
                    <div class="col-4"><label class="small fw-bold">Waist (cm)</label><input type="number" id="tbf-w" class="form-control" placeholder="80"></div>
                    <div class="col-4"><label class="small fw-bold">Neck (cm)</label><input type="number" id="tbf-n" class="form-control" placeholder="38"></div>
                    <div class="col-4"><label class="small fw-bold">Height (cm)</label><input type="number" id="tbf-h" class="form-control" placeholder="175"></div>
                </div>
                <button class="btn btn-grad w-100 py-2" onclick="calcBodyFat()">Estimate Fat %</button>
                <div id="tr" class="mt-4 text-center"></div>`;
            break;
        case 'meds':
            html = toolHeader('fa-pills', 'Medical Intake Reminder') + `
                <div class="p-2">
                    <div class="input-group mb-2">
                        <input type="text" id="tmed-name" class="form-control" placeholder="Medicine Name">
                        <input type="time" id="tmed-time" class="form-control">
                        <button class="btn btn-success" onclick="addMedication()"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <hr>
                    <div id="tmed-list" style="max-height: 200px; overflow-y: auto;"></div>
                </div>`;
            setTimeout(renderMeds, 100);
            break;
        case 'advwater':
            html = toolHeader('fa-cloud-sun-rain', 'Dynamic Structural Hydration') + `
                <div class="p-2">
                    <label class="small fw-bold">Your Weight (kg)</label><input type="number" id="taw-w" class="form-control mb-2" placeholder="70">
                    <label class="small fw-bold">Climate Environmental Factor</label><select id="taw-env" class="form-select mb-2"><option value="normal">Moderate / Air Conditioned</option><option value="hot">Hot Weather / High Sweat</option></select>
                    <label class="small fw-bold">Daily Activity Level</label><select id="taw-act" class="form-select mb-3"><option value="sedentary">Sedentary</option><option value="active">Active Exercise (+1 hour)</option></select>
                    <button class="btn btn-grad w-100 py-2" onclick="calcAdvancedWater()">Analyze Recommendation</button>
                    <div id="tr" class="mt-4 text-center"></div>
                </div>`;
            break;
        case 'smoking':
            html = toolHeader('fa-smoking-ban', 'Nicotine Damage & Longevity Metric') + `
                <div class="row g-2 mb-3">
                    <div class="col-6"><label class="small fw-bold">Cigarettes per Day</label><input type="number" id="tsm-count" class="form-control" placeholder="10"></div>
                    <div class="col-6"><label class="small fw-bold">Years Active Smoking</label><input type="number" id="tsm-years" class="form-control" placeholder="3"></div>
                </div>
                <button class="btn btn-grad w-100 py-2" onclick="calcSmokingDamage()">Analyze Impact Metrics</button>
                <div id="tr" class="mt-4 text-start small"></div>`;
            break;
        case 'hydration':
            html = toolHeader('fa-bottle-water', 'Intra-Workout Hydration Planner') + `
                <div class="row g-2 mb-3">
                    <div class="col-6"><label class="small fw-bold">Weight (kg)</label><input type="number" id="thyd-w" class="form-control" placeholder="70"></div>
                    <div class="col-6"><label class="small fw-bold">Workout Intensity</label><select id="thyd-int" class="form-select"><option value="mod">Light/Moderate</option><option value="high">Heavy/Intense</option></select></div>
                </div>
                <button class="btn btn-grad w-100 py-2" onclick="calcWorkoutHydration()">Get Blueprint</button>
                <div id="tr" class="mt-4 text-center"></div>`;
            break;
        case 'protein':
            html = toolHeader('fa-dumbbell', 'Macronutrient Protein Planner') + `
                <div class="row g-2 mb-3">
                    <div class="col-6"><label class="small fw-bold">Weight (kg)</label><input type="number" id="tprot-w" class="form-control" placeholder="70"></div>
                    <div class="col-6"><label class="small fw-bold">Physique Goal</label><select id="tprot-goal" class="form-select"><option value="gain">Muscle Gain</option><option value="maint">Maintenance</option><option value="loss">Fat Loss Cut</option></select></div>
                </div>
                <button class="btn btn-grad w-100 py-2" onclick="calcProteinNeeds()">Calculate Macros</button>
                <div id="tr" class="mt-4 text-center"></div>`;
            break;
        case 'spo2':
            html = toolHeader('fa-lungs', 'Pulse Oximeter Evaluator') + `
                <div class="p-2">
                    <label class="small fw-bold">SpO2 Percentage (%)</label>
                    <input type="number" id="tspo2-val" class="form-control mb-3 text-center fs-3" placeholder="98">
                    <button class="btn btn-grad w-100 py-2" onclick="checkOxygenSaturation()">Evaluate Saturation</button>
                    <div id="tr" class="mt-4 text-center"></div>
                </div>`;
            break;
        case 'mood':
            html = toolHeader('fa-face-smile', 'Behavioral Mood Sync Tracker') + `
                <div class="p-2 text-center">
                    <label class="small fw-bold d-block mb-3">Select Current Mood State</label>
                    <div class="d-flex justify-content-center gap-2 mb-4">
                        <button class="btn btn-outline-success fs-3" onclick="logUserMood('Happy', '🟢')">😊</button>
                        <button class="btn btn-outline-warning fs-3" onclick="logUserMood('Stressed', '🟡')">😰</button>
                        <button class="btn btn-outline-danger fs-3" onclick="logUserMood('Sad', '🔵')">😢</button>
                        <button class="btn btn-outline-info fs-3" onclick="logUserMood('Energetic', '⚡')">🔥</button>
                    </div>
                    <hr>
                    <h6 class="fw-bold mb-2 text-start">Historical Summary (Last 7 Days)</h6>
                    <div id="tmood-history" class="text-start small" style="max-height:120px; overflow-y:auto;"></div>
                </div>`;
            setTimeout(renderMoodHistory, 100);
            break;
    }
    content.innerHTML = html;
    new bootstrap.Modal('#toolModal').show();
}

/* ============ 12 ADVANCED CALCULATOR OPERATIONS ENGINE ============ */

// 1. Heart Rate Checker
function checkHeartRate() {
    const val = parseInt(document.getElementById('thr-val').value);
    if(!val) return;
    let res = "";
    if(val < 50) res = "<span class='text-info fw-bold fs-5'>Athlete Pulse</span><p class='small text-muted mt-1'>Excellent cardiovascular efficiency typically found in trained athletes.</p>";
    else if(val <= 85) res = "<span class='text-success fw-bold fs-5'>Normal Base</span><p class='small text-muted mt-1'>Healthy range for normal resting parameters.</p>";
    else if(val <= 100) res = "<span class='text-warning fw-bold fs-5'>Elevated Boundary</span><p class='small text-muted mt-1'>High normal resting bounds. Consider checking stress levels.</p>";
    else res = "<span class='text-danger fw-bold fs-5'>🚨 Tachycardia Alert</span><p class='small text-muted mt-1'>Resting state pulse exceeds 100 BPM. Seek professional baseline checking if sustained.</p>";
    document.getElementById('tr').innerHTML = res;
}

// 2. Sleep Calculator (90 min cycles backcalculated)
function calcSleepCycles() {
    const timeVal = document.getElementById('tsleep-time').value;
    if(!timeVal) return;
    const [h, m] = timeVal.split(':').map(Number);
    let target = new Date(); target.setHours(h, m, 0);
    
    let html = "<strong>Recommended Optimal Bedtimes:</strong><br><p class='text-muted small mb-3'>Calculated using structural 90-minute neural sleep cycles factoring a 15-minute standard latency to fall asleep.</p>";
    const cycles = [6, 5, 4]; // 9h, 7.5h, 6h sleep tracks
    
    cycles.forEach(c => {
        let bed = new Date(target.getTime() - (c * 90 * 60 * 1000) - (15 * 60 * 1000));
        html += `<div class='border-start border-primary border-3 ps-2 my-2'>
                    <strong>${bed.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</strong> 
                    <span class='text-secondary'>(${c * 1.5} Hours Active Duration - ${c} Cycles)</span>
                 </div>`;
    });
    document.getElementById('tr').innerHTML = html;
}

// 3. Step Tracker Matrix
function trackSteps() {
    const steps = parseInt(document.getElementById('tstep-val').value);
    if(isNaN(steps)) return;
    const pct = Math.min((steps / 10000) * 100, 100);
    const cals = Math.round(steps * 0.04); // ~0.04 kcal per step estimate
    
    document.getElementById('tr').innerHTML = `
        <label class="small fw-bold mb-1 d-block">Goal Progress to 10,000</label>
        <div class="progress mb-3" style="height:20px;">
            <div class="progress-bar bg-success progress-bar-striped" style="width:${pct}%">${Math.round(pct)}%</div>
        </div>
        <p class="mb-0 small text-center fw-bold text-dark">🔥 Estimated Energy Expended: <span class="text-success">${cals} kcal</span></p>
    `;
}

// 4. Ideal Body Weight Range (Devine Formula + Healthy Bounds)
function calcIdealWeight() {
    const gen = document.getElementById('tiw-gen').value;
    const h = parseFloat(document.getElementById('tiw-h').value);
    if(!h) return;
    
    const inchesOver5Foot = Math.max(0, (h / 2.54) - 60);
    let ibw = gen === 'm' ? 50.0 + (2.3 * inchesOver5Foot) : 45.5 + (2.3 * inchesOver5Foot);
    
    // Healthy BMI Bounds approach (18.5 to 24.9)
    let minW = (18.5 * ((h/100)*(h/100))).toFixed(1);
    let maxW = (24.9 * ((h/100)*(h/100))).toFixed(1);
    
    document.getElementById('tr').innerHTML = `
        <h4 class="text-primary fw-bold mb-1">${ibw.toFixed(1)} kg</h4>
        <small class="text-muted d-block mb-2">Calculated Clinical Devine Baseline</small>
        <hr class="my-2">
        <small class="fw-bold text-dark">Healthy BMI Range Equivalency:</small><br>
        <span class="small text-secondary">${minW} kg to ${maxW} kg</span>
    `;
}

// 5. Body Fat % (U.S. Navy Anthropometric Algorithm)
function calcBodyFat() {
    const gen = document.getElementById('tbf-gen').value;
    const w = parseFloat(document.getElementById('tbf-w').value);
    const n = parseFloat(document.getElementById('tbf-n').value);
    const h = parseFloat(document.getElementById('tbf-h').value);
    if(!w || !n || !h) return;
    
    let bf = 0;
    // Conversion factors to Log10 metrics
    if(gen === 'm') {
        bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
        bf = 495 / (1.29579 - 0.35004 * Math.log10(w - n) + 0.22100 * Math.log10(h)) - 450;
    }
    
    if(bf < 2 || isNaN(bf)) bf = 12.5; // Baseline safe execution patch
    
    let cat = "Normal Pool";
    if(gen === 'm') {
        cat = bf < 6 ? "Essential Fat" : bf < 14 ? "Athletic Build" : bf < 18 ? "Fitness Bounds" : bf < 25 ? "Acceptable Mean" : "Obese Tier";
    } else {
        cat = bf < 14 ? "Essential Fat" : bf < 21 ? "Athletic Build" : bf < 25 ? "Fitness Bounds" : bf < 32 ? "Acceptable Mean" : "Obese Tier";
    }
    
    document.getElementById('tr').innerHTML = `<h3 class="text-primary fw-bold mb-1">${bf.toFixed(1)}%</h3><span class="badge bg-primary px-3 py-2">${cat}</span>`;
}

// 6. Medical Intake Reminder Framework
function addMedication() {
    const name = document.getElementById('tmed-name').value.trim();
    const time = document.getElementById('tmed-time').value;
    if(!name || !time) return;
    
    const list = JSON.parse(localStorage.getItem('mp_meds') || '[]');
    list.push({ name, time, status: 'Pending', timestamp: Date.now() });
    localStorage.setItem('mp_meds', JSON.stringify(list));
    
    document.getElementById('tmed-name').value = "";
    renderMeds();
}
function toggleMedStatus(index) {
    const list = JSON.parse(localStorage.getItem('mp_meds') || '[]');
    list[index].status = list[index].status === 'Pending' ? 'Taken ✅' : 'Pending';
    localStorage.setItem('mp_meds', JSON.stringify(list));
    renderMeds();
}
function deleteMed(index) {
    const list = JSON.parse(localStorage.getItem('mp_meds') || '[]');
    list.splice(index, 1);
    localStorage.setItem('mp_meds', JSON.stringify(list));
    renderMeds();
}
function renderMeds() {
    const list = JSON.parse(localStorage.getItem('mp_meds') || '[]');
    const target = document.getElementById('tmed-list');
    if(!target) return;
    target.innerHTML = list.length ? list.map((m, idx) => `
        <div class="d-flex justify-content-between align-items-center bg-light border p-2 rounded mb-2 small shadow-sm">
            <div><span class="fw-bold text-dark">${m.name}</span> <span class="badge bg-secondary ms-1">${m.time}</span></div>
            <div class="d-flex gap-1">
                <button class="btn btn-xs ${m.status === 'Pending' ? 'btn-outline-warning' : 'btn-success'} py-0 px-2 btn-sm" onclick="toggleMedStatus(${idx})">${m.status}</button>
                <button class="btn btn-xs btn-outline-danger py-0 px-2 btn-sm" onclick="deleteMed(${idx})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    `).join('') : '<p class="text-muted text-center py-2 small">No active medications configured today.</p>';
}

// 7. Advanced Water Calculator
function calcAdvancedWater() {
    const w = parseFloat(document.getElementById('taw-w').value);
    const env = document.getElementById('taw-env').value;
    const act = document.getElementById('taw-act').value;
    if(!w) return;
    
    let base = w * 0.035; // 35ml per kg base execution
    if(env === 'hot') base += 0.6; // Added climate matrix fluid requirements
    if(act === 'active') base += 0.8; // Added expenditure compensation
    
    document.getElementById('tr').innerHTML = `<h3 class="text-info fw-bold mb-1">${base.toFixed(1)} Liters</h3><p class="small text-muted mb-0">Recommended target baseline allocation metrics.</p>`;
}

// 8. Smoking Impact Counter
function calcSmokingDamage() {
    const count = parseInt(document.getElementById('tsm-count').value);
    const years = parseInt(document.getElementById('tsm-years').value);
    if(isNaN(count) || isNaN(years)) return;
    
    const totalCigs = count * 365 * years;
    const cash = totalCigs * 17; // ~17 INR average tracking per item allocation cost
    const lifeDaysLost = Math.round((totalCigs * 11) / 1440); // 11 minutes structural drop expectancy baseline
    
    document.getElementById('tr').innerHTML = `
        <div class="text-danger fw-bold border-bottom pb-2 mb-2">Calculated Total Degradation Matrix:</div>
        <div class="mb-1">💸 Financial Expenditure: <strong class="text-dark">₹${cash.toLocaleString('en-IN')}</strong></div>
        <div class="mb-1">⏳ Longevity Lifespan Deficit: <strong class="text-danger">${lifeDaysLost} Days Gone</strong></div>
        <div class="x-small text-success mt-2 fw-bold">✨ Cessation of activity initiates standard physiological cellular repair mechanisms within 20 operational minutes.</div>
    `;
}

// 9. Physical Hydration Post-Workout Strategy
function calcWorkoutHydration() {
    const w = parseFloat(document.getElementById('thyd-w').value);
    const intensity = document.getElementById('thyd-int').value;
    if(!w) return;
    
    let baselineVal = w * 35;
    let extraVal = intensity === 'high' ? 900 : 500;
    
    document.getElementById('tr').innerHTML = `
        <div class="small mb-1">Standard Core Fluid Base: <strong>${(baselineVal/1000).toFixed(2)} L / day</strong></div>
        <div class="small text-primary border-top pt-2"><strong>Exercise Intra/Post Load:</strong> Add <span class="badge bg-primary">${extraVal} ml</span> within active windows to offset respiratory thermal moisture drainage.</div>
    `;
}

// 10. Protein Target Metric Blueprint
function calcProteinNeeds() {
    const w = parseFloat(document.getElementById('tprot-w').value);
    const goal = document.getElementById('tprot-goal').value;
    if(!w) return;
    
    let multi = goal === 'gain' ? 2.0 : goal === 'loss' ? 1.6 : 1.2;
    let target = Math.round(w * multi);
    
    document.getElementById('tr').innerHTML = `
        <h3 class="text-dark fw-bold mb-1">${target} grams</h3>
        <p class="small text-muted mb-0">Daily target nutrient assignment threshold framework based on active goals.</p>
    `;
}

// 11. Pulse Oximeter Evaluation
function checkOxygenSaturation() {
    const val = parseInt(document.getElementById('tspo2-val').value);
    if(!val) return;
    let res = "";
    if(val >= 95) res = "<h4 class='text-success fw-bold mb-1'>Normal Pool Saturation</h4><span class='small text-muted'>Safe clinical homeostasis respiratory boundary profiles.</span>";
    else if(val >= 90) res = "<h4 class='text-warning fw-bold mb-1'>Low Oxygen Sub-tier</h4><span class='small text-muted'>Mild hypoxic properties observed. Ensure ventilation optimization and reassess.</span>";
    else res = "<h4 class='text-danger fw-bold mb-1'>🚨 Seek Urgent Medical Care</h4><span class='small text-muted'>Clinical hypoxia markers present. Contact health provider network setups instantly.</span>";
    document.getElementById('tr').innerHTML = res;
}

// 12. Mood Tracking Sync Framework
function logUserMood(state, icon) {
    const history = JSON.parse(localStorage.getItem('mp_moods') || '[]');
    history.unshift({ state, icon, date: new Date().toLocaleDateString() });
    if(history.length > 7) history.pop(); // Hold rolling week parameter setups
    localStorage.setItem('mp_moods', JSON.stringify(history));
    renderMoodHistory();
}
function renderMoodHistory() {
    const history = JSON.parse(localStorage.getItem('mp_moods') || '[]');
    const target = document.getElementById('tmood-history');
    if(!target) return;
    target.innerHTML = history.length ? history.map(h => `
        <div class="d-flex justify-content-between border-bottom py-1 text-dark x-small">
            <span>${h.icon} <strong>${h.state}</strong></span>
            <span class="text-muted">${h.date}</span>
        </div>
    `).join('') : '<p class="text-muted text-center py-2 x-small mb-0">No psychological data logged yet. Click an emoji above.</p>';
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