// ========== DARK MODE TOGGLE ==========
const darkToggle = document.getElementById('darkModeToggle');
if (darkToggle) {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled');
      darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
}

// ========== TRANSLATIONS (فقط للعناصر الأساسية: هيدر، فوتر، أزرار عامة) ==========
const translationsDB = {
  en: {
    // Navigation - Header
    nav_home: "Home",
    nav_forum: "Forum",
    nav_consultations: "Consultations",
    nav_login: "Login",
    nav_register: "Sign Up",
    // Footer
    footer_tagline: "LegalTech platform · Algeria",
    footer_about: "About Us",
    footer_terms: "Terms of Use",
    footer_privacy: "Privacy Policy",
    footer_disclaimer: "Disclaimer",
    footer_support: "Support",
    footer_copyright: "Legal Innovation",
    // Hero Section
    hero_title: "Connect with Certified Lawyers in Algeria",
    hero_desc: "LexTech DZ bridges justice & technology — trusted legal advice, verified experts, and transparent pricing.",
    hero_btn1: "📅 Book a Consultation",
    hero_btn2: "💬 Ask the Community",
    // Stats
    stat_lawyers: "Certified Lawyers",
    stat_cases: "Legal Questions Solved",
    stat_satisfaction: "Client Satisfaction",
    // Features
    features_title: "Why LexTech DZ?",
    feature1_title: "Verified Lawyers",
    feature1_desc: "Official bar association credentials & golden badge assurance.",
    feature2_title: "Transparent Pricing",
    feature2_desc: "Fixed fees, no hidden costs — 20% platform commission only.",
    feature3_title: "Legal Forum",
    feature3_desc: "Free community advice with lawyer-verified answers.",
    feature4_title: "Secure & Confidential",
    feature4_desc: "End-to-end encrypted sessions and data protection.",
    // CTA
    cta_title: "Ready to get professional legal support?",
    cta_btn: "Join LexTech DZ Today →",
    // Forum page (only buttons, not posts)
    forum_title: "Legal Forum",
    forum_subtitle: "Ask questions, get verified answers from certified lawyers",
    forum_cat_all: "All Topics",
    forum_cat_admin: "Administrative Law",
    forum_cat_family: "Family Law",
    forum_cat_commercial: "Commercial Law",
    ask_question: "Ask a Legal Question",
    // Consultations page (only buttons, not lawyer cards)
    consult_title: "Premium Legal Consultations",
    consult_sub: "Choose a certified lawyer and book a private session. Secure payment & guaranteed follow-up.",
    book_btn: "Book Consultation",
    // Auth pages
    login_title: "Sign In to LexTech DZ",
    login_citizen: "Citizen",
    login_lawyer: "Lawyer",
    login_admin: "Admin",
    login_email: "Email address",
    login_password: "Password",
    login_btn: "Login",
    login_register_link: "Don't have an account? Register here",
    register_title: "Create Account",
    register_fullname: "Full Name",
    register_email: "Email",
    register_password: "Password",
    register_btn: "Register",
    register_login_link: "Already registered? Login"
  },
  fr: {
    nav_home: "Accueil",
    nav_forum: "Forum",
    nav_consultations: "Consultations",
    nav_login: "Connexion",
    nav_register: "Inscription",
    footer_tagline: "Plateforme LegalTech · Algérie",
    footer_about: "À propos",
    footer_terms: "Conditions d'utilisation",
    footer_privacy: "Politique de confidentialité",
    footer_disclaimer: "Avertissement",
    footer_support: "Support",
    footer_copyright: "Innovation juridique",
    hero_title: "Connectez-vous avec des avocats certifiés en Algérie",
    hero_desc: "LexTech DZ relie la justice et la technologie — conseils juridiques de confiance, experts vérifiés et prix transparents.",
    hero_btn1: "📅 Réserver une consultation",
    hero_btn2: "💬 Demander à la communauté",
    stat_lawyers: "Avocats certifiés",
    stat_cases: "Questions juridiques résolues",
    stat_satisfaction: "Satisfaction client",
    features_title: "Pourquoi LexTech DZ ?",
    feature1_title: "Avocats vérifiés",
    feature1_desc: "Identifiants officiels du barreau et garantie du badge d'or.",
    feature2_title: "Prix transparents",
    feature2_desc: "Frais fixes, sans coûts cachés — seulement 20% de commission.",
    feature3_title: "Forum juridique",
    feature3_desc: "Conseils communautaires gratuits avec réponses vérifiées par des avocats.",
    feature4_title: "Sécurisé et confidentiel",
    feature4_desc: "Sessions cryptées de bout en bout et protection des données.",
    cta_title: "Prêt à obtenir un soutien juridique professionnel ?",
    cta_btn: "Rejoindre LexTech DZ aujourd'hui →",
    forum_title: "Forum juridique",
    forum_subtitle: "Posez des questions, obtenez des réponses vérifiées d'avocats certifiés",
    forum_cat_all: "Tous les sujets",
    forum_cat_admin: "Droit administratif",
    forum_cat_family: "Droit de la famille",
    forum_cat_commercial: "Droit commercial",
    ask_question: "Poser une question juridique",
    consult_title: "Consultations juridiques premium",
    consult_sub: "Choisissez un avocat certifié et réservez une session privée. Paiement sécurisé et suivi garanti.",
    book_btn: "Réserver une consultation",
    login_title: "Connectez-vous à LexTech DZ",
    login_citizen: "Citoyen",
    login_lawyer: "Avocat",
    login_admin: "Admin",
    login_email: "Adresse e-mail",
    login_password: "Mot de passe",
    login_btn: "Connexion",
    login_register_link: "Vous n'avez pas de compte ? Inscrivez-vous ici",
    register_title: "Créer un compte",
    register_fullname: "Nom complet",
    register_email: "E-mail",
    register_password: "Mot de passe",
    register_btn: "S'inscrire",
    register_login_link: "Déjà inscrit ? Connexion"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_forum: "المنتدى",
    nav_consultations: "الاستشارات",
    nav_login: "تسجيل الدخول",
    nav_register: "إنشاء حساب",
    footer_tagline: "منصة LegalTech · الجزائر",
    footer_about: "من نحن",
    footer_terms: "شروط الاستخدام",
    footer_privacy: "سياسة الخصوصية",
    footer_disclaimer: "إخلاء المسؤولية",
    footer_support: "الدعم",
    footer_copyright: "الابتكار القانوني",
    hero_title: "تواصل مع محامين معتمدين في الجزائر",
    hero_desc: "ليكس تيك ديزي تربط العدالة بالتكنولوجيا — استشارات قانونية موثوقة، خبراء معتمدون، وأسعار شفافة.",
    hero_btn1: "📅 احجز استشارة",
    hero_btn2: "💬 اسأل المجتمع",
    stat_lawyers: "محامون معتمدون",
    stat_cases: "قضايا قانونية محلولة",
    stat_satisfaction: "رضا العملاء",
    features_title: "لماذا ليكس تيك ديزي؟",
    feature1_title: "محامون موثقون",
    feature1_desc: "أوراق اعتماد رسمية من نقابة المحامين وضمان الشارة الذهبية.",
    feature2_title: "أسعار شفافة",
    feature2_desc: "رسوم ثابتة، بدون تكاليف خفية — عمولة المنصة 20% فقط.",
    feature3_title: "منتدى قانوني",
    feature3_desc: "نصائح مجانية من المجتمع مع إجابات موثقة من محامين.",
    feature4_title: "آمن وسري",
    feature4_desc: "جلسات مشفرة وحماية بيانات كاملة.",
    cta_title: "هل أنت مستعد للحصول على دعم قانوني احترافي؟",
    cta_btn: "انضم إلى ليكس تيك ديزي اليوم ←",
    forum_title: "المنتدى القانوني",
    forum_subtitle: "اطرح أسئلة واحصل على إجابات موثقة من محامين معتمدين",
    forum_cat_all: "جميع المواضيع",
    forum_cat_admin: "القانون الإداري",
    forum_cat_family: "قانون الأسرة",
    forum_cat_commercial: "القانون التجاري",
    ask_question: "اطرح سؤالاً قانونياً",
    consult_title: "استشارات قانونية متميزة",
    consult_sub: "اختر محامياً معتمداً واحجز جلسة خاصة. دفع آمن ومتابعة مضمونة.",
    book_btn: "احجز استشارة",
    login_title: "تسجيل الدخول إلى ليكس تيك ديزي",
    login_citizen: "مواطن",
    login_lawyer: "محامٍ",
    login_admin: "مدير",
    login_email: "البريد الإلكتروني",
    login_password: "كلمة المرور",
    login_btn: "تسجيل الدخول",
    login_register_link: "ليس لديك حساب؟ سجل هنا",
    register_title: "إنشاء حساب",
    register_fullname: "الاسم الكامل",
    register_email: "البريد الإلكتروني",
    register_password: "كلمة المرور",
    register_btn: "تسجيل",
    register_login_link: "لديك حساب بالفعل؟ تسجيل الدخول"
  }
};

// Current language
let currentLang = localStorage.getItem('preferredLang') || 'en';

// Function to apply translations (فقط للعناصر المحددة)
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translationsDB[lang] && translationsDB[lang][key]) {
      if (el.tagName === 'INPUT' && el.placeholder) {
        el.placeholder = translationsDB[lang][key];
      } else if (el.tagName === 'BUTTON' && el.value) {
        el.value = translationsDB[lang][key];
      } else {
        el.innerHTML = translationsDB[lang][key];
      }
    }
  });
  
  // Update RTL direction
  if (lang === 'ar') {
    document.body.setAttribute('dir', 'rtl');
  } else {
    document.body.removeAttribute('dir');
  }
  
  // Update language button label
  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    const langIcons = { en: '🇬🇧 EN', fr: '🇫🇷 FR', ar: '🇸🇦 AR' };
    currentLangLabel.innerHTML = langIcons[lang] || '🇬🇧 EN';
  }
}

// ========== SINGLE LANGUAGE TOGGLE BUTTON ==========
const langToggleBtn = document.getElementById('langToggleBtn');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    if (currentLang === 'en') {
      currentLang = 'fr';
    } else if (currentLang === 'fr') {
      currentLang = 'ar';
    } else {
      currentLang = 'en';
    }
    applyTranslations(currentLang);
    localStorage.setItem('preferredLang', currentLang);
  });
}

// Apply saved language on page load
applyTranslations(currentLang);

// ========== TERMS ACCEPTANCE MODAL ==========
function showTermsModal() {
  if (window.location.pathname.includes('terms.html') || 
      window.location.pathname.includes('privacy.html') || 
      window.location.pathname.includes('disclaimer.html')) {
    return;
  }
  
  const modal = document.createElement('div');
  modal.id = 'termsModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(5px);
  `;
  modal.innerHTML = `
    <div style="background: var(--bg-white); max-width: 500px; width: 90%; border-radius: 24px; padding: 2rem; text-align: center;">
      <i class="fas fa-gavel" style="font-size: 3rem; color: var(--gold); margin-bottom: 1rem;"></i>
      <h2>Welcome to LexTech DZ</h2>
      <p>Please read and accept our terms to continue.</p>
      <div style="background: var(--bg-light); padding: 1rem; border-radius: 12px; text-align: left; max-height: 250px; overflow-y: auto; margin-bottom: 1.5rem; font-size: 0.85rem;">
        <h4>📜 Terms of Use:</h4>
        <p>1. LexTech DZ connects citizens with certified lawyers.</p>
        <p>2. Platform commission is 20% of consultation fee.</p>
        <p>3. Information provided is not legal advice until formal consultation.</p>
        <p>4. Lawyers must hold valid bar association credentials.</p>
        <p>5. Users agree to respectful communication.</p>
        <p>6. Disputes governed by Algerian law.</p>
        <p>7. Platform not liable for legal outcomes.</p>
      </div>
      <div style="display: flex; gap: 1rem; justify-content: center;">
        <button id="acceptTermsBtn" class="btn-primary">I Accept</button>
        <button id="declineTermsBtn" class="btn-outline">Decline</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  
  document.getElementById('acceptTermsBtn').addEventListener('click', () => {
    localStorage.setItem('termsAccepted', 'true');
    modal.remove();
  });
  
  document.getElementById('declineTermsBtn').addEventListener('click', () => {
    modal.innerHTML = `<div style="background: var(--bg-white); border-radius: 24px; padding: 2rem; text-align: center;">
      <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #e11d48;"></i>
      <h2>You must accept the terms</h2>
      <p>You cannot use LexTech DZ without accepting our terms.</p>
      <button id="retryAcceptBtn" class="btn-primary" style="margin-top: 1rem;">Accept Terms</button>
    </div>`;
    document.getElementById('retryAcceptBtn').addEventListener('click', () => {
      localStorage.setItem('termsAccepted', 'true');
      modal.remove();
    });
  });
}

if (!localStorage.getItem('termsAccepted')) {
  showTermsModal();
}

// ========== MOBILE MENU ==========
const mobileIcon = document.getElementById('mobileMenuIcon');
if (mobileIcon) {
  mobileIcon.addEventListener('click', () => {
    document.querySelector('.main-nav')?.classList.toggle('active');
  });
}