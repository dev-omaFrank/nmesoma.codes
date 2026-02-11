/**
 * Developer Landing Page - Main JavaScript
 * Handles page routing, questionnaire logic, and form submissions
 */

// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
    currentPage: 'home',
    responses: {
        hasProject: '',
        projectType: '',
        timeline: '',
        budget: ''
    }
};

// ============================================
// PAGE TEMPLATES
// ============================================

const pages = {
    home: `
        <div class="hero">
            <div class="hero-content">
                <div class="hero-badges">
                    <div class="badge">
                        <span>💻</span>
                        <span>Full-Stack Developer</span>
                    </div>
                    <div class="badge">
                        <span>📱</span>
                        <span>Mobile Specialist</span>
                    </div>
                </div>

                <h1 class="hero-title">
                    Build Your Vision with <span class="gradient-text">Nmesoma Ononogbo</span>
                </h1>

                <p class="hero-description">
                    Full-stack web applications and mobile apps that drive real results. From concept to deployment, I deliver scalable, modern solutions tailored to your business needs.
                </p>

                <div class="features-grid">
                    <div class="glass-card feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>Fast & Scalable</h3>
                        <p>Performance-optimized solutions built for growth</p>
                    </div>
                    <div class="glass-card feature-card">
                        <div class="feature-icon">👥</div>
                        <h3>User-Focused</h3>
                        <p>Intuitive interfaces designed with users in mind</p>
                    </div>
                    <div class="glass-card feature-card">
                        <div class="feature-icon">🏆</div>
                        <h3>Proven Track Record</h3>
                        <p>Delivered successful projects across industries</p>
                    </div>
                </div>

                <div class="cta-section">
                    <button class="btn btn-lg btn-primary cta-button" onclick="goToQuestionnaire()">
                        Start a Project
                        <span>→</span>
                    </button>
                    <p class="cta-subtext">Let's discuss your project and see if we're a great fit.</p>
                </div>
            </div>
        </div>

        <section class="about">
            <div class="container about-content">
                <h2 class="about-title">What I Bring to the Table</h2>
                <div class="about-grid">
                    <div class="glass-card about-card">
                        <h3>Web Development</h3>
                        <p>React, Next.js, TypeScript, Node.js, and modern web technologies. I build responsive, SEO-friendly applications that perform flawlessly.</p>
                        <ul>
                            <li>✓ Full-stack web applications</li>
                            <li>✓ Real-time features & APIs</li>
                            <li>✓ Database design & optimization</li>
                            <li>✓ Deployment & DevOps</li>
                        </ul>
                    </div>
                    <div class="glass-card about-card secondary">
                        <h3>Mobile Development</h3>
                        <p>React Native and native iOS/Android development. Cross-platform solutions that deliver native performance and user experience.</p>
                        <ul>
                            <li>✓ iOS & Android apps</li>
                            <li>✓ Cross-platform solutions</li>
                            <li>✓ App store deployment</li>
                            <li>✓ Performance optimization</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,

    questionnaire: `
        <div class="questionnaire">
            <div class="questionnaire-container">
                <div class="questionnaire-header">
                    <h1>Let's Qualify Your Project</h1>
                    <p>Answer a few quick questions so I can determine if we're a good fit for your project.</p>
                </div>

                <form id="questionnaireForm" onsubmit="handleQuestionnaireSubmit(event)">
                    <!-- Question 1: Do you have a project? -->
                    <div class="glass-card question-card">
                        <h3>Do you have a project in mind?</h3>
                        <div class="radio-group">
                            <label class="radio-option">
                                <input type="radio" name="hasProject" value="yes" onchange="handleProjectChange(this.value)">
                                <span>Yes, I have a specific project</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="hasProject" value="no" onchange="handleProjectChange(this.value)">
                                <span>No, I'm just exploring options</span>
                            </label>
                        </div>
                    </div>

                    <!-- Question 2: Project Type (conditional) -->
                    <div id="projectTypeQuestion" class="glass-card question-card hidden">
                        <h3>What type of project are you looking for?</h3>
                        <div class="radio-group">
                            <label class="radio-option">
                                <input type="radio" name="projectType" value="web">
                                <span>Web Application</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="projectType" value="mobile">
                                <span>Mobile App</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="projectType" value="both">
                                <span>Both Web & Mobile</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="projectType" value="other">
                                <span>Something Else</span>
                            </label>
                        </div>
                    </div>

                    <!-- Question 3: Timeline (conditional) -->
                    <div id="timelineQuestion" class="glass-card question-card hidden">
                        <h3>What's your timeline?</h3>
                        <div class="radio-group">
                            <label class="radio-option">
                                <input type="radio" name="timeline" value="urgent">
                                <span>ASAP (within 1-2 months)</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="timeline" value="moderate">
                                <span>Flexible (3-6 months)</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="timeline" value="flexible">
                                <span>Very Flexible (6+ months)</span>
                            </label>
                        </div>
                    </div>

                    <!-- Question 4: Budget (conditional) -->
                    <div id="budgetQuestion" class="glass-card question-card hidden">
                        <h3>What's your budget range?</h3>
                        <div class="radio-group">
                            <label class="radio-option">
                                <input type="radio" name="budget" value="small">
                                <span>At most NGN150,000</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="budget" value="medium">
                                <span>NGN250,000 - NGN300,000</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="budget" value="large">
                                <span>NGN500,000+</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="budget" value="unsure">
                                <span>Not sure yet</span>
                            </label>
                        </div>
                    </div>

                    <!-- Form Buttons -->
                    <div class="form-buttons">
                        <button type="button" class="btn btn-outline" onclick="goHome()">
                            Back
                        </button>
                        <button type="submit" class="btn btn-lg btn-primary" id="submitBtn">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `,

    thankYou: `
        <div class="thank-you">
            <div class="thank-you-content">
                <div class="success-icon">✓</div>
                <h1 class="thank-you-title">Thank You!</h1>
                <p class="thank-you-message">
                    I appreciate you stopping by. If you ever have a project in mind or want to discuss your development needs, feel free to reach out anytime. I'm always excited to collaborate on interesting projects.
                </p>

                <div class="glass-card" style="padding: 2rem; margin-bottom: 2rem;">
                    <h3>Let's Stay Connected</h3>
                    <p style="margin-bottom: 1.5rem;">Follow my work or get in touch through your preferred channel:</p>
                    <div class="social-links">
                        <div class="social-links-row">
                            <a href="https://github.com/dev-omaFrank" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>
                            <a href="https://linkedin.com/in/nmesoma-ononogbo" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn</a>
                            <a href="mailto:sayhellotodevops@gmail.com" class="social-link">Email</a>
                        </div>
                    </div>
                </div>

                <button class="btn btn-outline" onclick="goHome()">
                    ← Back to Home
                </button>
            </div>
        </div>
    `
};

// ============================================
// ROUTING FUNCTIONS
// ============================================

function render(pageName) {
    const root = document.getElementById('root');
    root.innerHTML = pages[pageName] || pages.home;
    state.currentPage = pageName;
    window.scrollTo(0, 0);
}

function goHome() {
    state.responses = { hasProject: '', projectType: '', timeline: '', budget: '' };
    render('home');
}

function goToQuestionnaire() {
    render('questionnaire');
}

// ============================================
// QUESTIONNAIRE LOGIC
// ============================================

function handleProjectChange(value) {
    state.responses.hasProject = value;
    
    const projectTypeQuestion = document.getElementById('projectTypeQuestion');
    const timelineQuestion = document.getElementById('timelineQuestion');
    const budgetQuestion = document.getElementById('budgetQuestion');
    const submitBtn = document.getElementById('submitBtn');

    if (value === 'yes') {
        projectTypeQuestion.classList.remove('hidden');
        timelineQuestion.classList.remove('hidden');
        budgetQuestion.classList.remove('hidden');
    } else {
        projectTypeQuestion.classList.add('hidden');
        timelineQuestion.classList.add('hidden');
        budgetQuestion.classList.add('hidden');
        submitBtn.disabled = false;
    }
}

function handleQuestionnaireSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('questionnaireForm');
    const formData = new FormData(form);

    const hasProject = formData.get('hasProject');
    const projectType = formData.get('projectType');
    const timeline = formData.get('timeline');
    const budget = formData.get('budget');

    // Make responses more readable
    const projectTypeMap = {
        web: "Web Application",
        mobile: "Mobile App",
        both: "Web & Mobile",
        other: "Other"
    };

    const timelineMap = {
        urgent: "ASAP (1–2 months)",
        moderate: "3–6 months",
        flexible: "6+ months"
    };

    const budgetMap = {
        small: "Up to NGN150,000",
        medium: "NGN250,000 – NGN300,000",
        large: "NGN500,000+",
        unsure: "Not sure yet"
    };

    let message = "";

    if (hasProject === "no") {
        render("thankYou")
        return;
    } else {
        message =
            "Hi Nmesoma 👋,\n\n" +
            "I have a project I'd like to discuss:\n\n" +
            "• Project Type: " + (projectTypeMap[projectType] || projectType) + "\n" +
            "• Timeline: " + (timelineMap[timeline] || timeline) + "\n" +
            "• Budget: " + (budgetMap[budget] || budget) + "\n\n" +
            "Looking forward to working with you!";
    }

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = "2348157376927";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.location.href = whatsappURL;
}



// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    render('home');
});
