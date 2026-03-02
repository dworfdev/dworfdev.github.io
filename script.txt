// 1. Disclaimer Logic
function acceptDisclaimer() {
    const overlay = document.getElementById('disclaimer');
    overlay.style.transition = 'opacity 0.5s ease, visibility 0.5s';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    setTimeout(() => { overlay.style.display = 'none'; }, 500);
    localStorage.setItem('dworf_disclaimer_accepted', 'true');
}

// 2. Trap Hustle Statuses (Global Version)
const statuses = [
    "CHASING THE BAG...",
    "CENTERING DIVS WHILE SIPPIN' LEAN",
    "ENCRYPTING THE STREETS",
    "Y2K AESTHETICS OVERLOAD",
    "TRAP_HUB_INITIALIZED",
    "SYSTEM_CRITICAL_SWAG",
    "0-DAY EXPLOIT FOUND IN YOUR MIND",
    "HUSTLING IN THE SIMULATION",
    "UPGRADING THE MATRIX..."
];

function updateMissionStatus() {
    const statusEl = document.getElementById('mission-status');
    if (!statusEl) return;
    let i = 0;
    setInterval(() => {
        statusEl.style.opacity = '0';
        setTimeout(() => {
            statusEl.innerText = statuses[i];
            statusEl.style.opacity = '1';
            i = (i + 1) % statuses.length;
        }, 300);
    }, 3000);
}

// 3. Glitch Title Scramble
const targetText = "DWORF.DEV";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()_+<>?";
const titleEl = document.getElementById('glitch-title');

function scrambleText() {
    if (!titleEl) return;
    let iteration = 0;
    titleEl.classList.add('glitch-active');
    const interval = setInterval(() => {
        titleEl.innerText = targetText.split("").map((char, index) => {
            if(index < iteration) return targetText[index];
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        if(iteration >= targetText.length) {
            clearInterval(interval);
            titleEl.classList.remove('glitch-active');
        }
        iteration += 1 / 3;
    }, 30);
}

// 4. Initialization
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('disclaimer');
    if (localStorage.getItem('dworf_disclaimer_accepted') === 'true') {
        overlay.style.display = 'none';
    }
    setInterval(scrambleText, 6000);
    updateMissionStatus();
});

// 5. Swag Button Trigger
function triggerSwag() {
    const body = document.body;
    const button = document.getElementById('swag-button');
    body.classList.add('system-critical', 'shake');
    button.innerText = "OVERFLOW";
    button.style.backgroundColor = "#ff0000";
    setTimeout(() => {
        body.classList.remove('system-critical', 'shake');
        button.innerText = "ACTIVE";
        button.style.backgroundColor = "#00ff00";
    }, 400);
}

// 6. FINAL DESTRUCTION (The Troll)
function triggerTroll() {
    const body = document.body;
    body.classList.add('shake');
    
    // Kill all content
    document.querySelectorAll('h1, h2, p, span, h3').forEach(el => {
        el.innerText = "SYSTEM_FAILURE_VOID";
        el.style.color = "#ff0000";
    });

    setTimeout(() => {
        const overlay = document.createElement('div');
        overlay.id = 'horror-overlay';
        overlay.style.display = 'flex';
        
        overlay.innerHTML = `
            <div class="glitch-text-packed font-black">
                YOU'RE COOKED :)<br>
                SYSTEM BREACHED<br>
                CLOUT OVERLOAD<br>
                YOU'RE COOKED :)<br>
                ACCESS_DENIED
            </div>
            
            <div class="system-logs-horror text-center">
                IP_ADDR: LEAKED_TO_VOID<br>
                STATUS: DATA_CORRUPTED<br>
                <span class="animate-pulse text-black font-bold">WIPING_YOUR_SSD: 84%...</span>
            </div>

            <div class="absolute bottom-10 text-black font-black uppercase tracking-widest">
                F5 IS YOUR ONLY GOD NOW. BYE.
            </div>
        `;
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        // Popup Hell
        setInterval(() => {
            const win = document.createElement('div');
            const x = Math.random() * (window.innerWidth - 250);
            const y = Math.random() * (window.innerHeight - 150);
            win.className = 'critical-popup';
            win.style.left = `${x}px`;
            win.style.top = `${y}px`;
            win.innerHTML = `
                <div class="popup-header">KERNEL_PANIC.exe</div>
                <div class="popup-body">YOU'RE COOKED :)</div>
            `;
            document.body.appendChild(win);
        }, 150);

        // 7. THE FINAL SHOT (Crash after 5 seconds)
        setTimeout(() => {
            const crashArray = [];
            while(true) {
                crashArray.push(new Array(1000000).fill("SWAG"));
            }
        }, 5000);
        
    }, 800);
}