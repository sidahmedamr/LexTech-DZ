/* ========================================
   LEXTECH DZ - MODERN MAIN JAVASCRIPT
   Enhanced with Scroll Effects, Animations & Glassmorphism
   ======================================== */

// ========== 1. HEADER SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.padding = '0.5rem 0';
      header.style.background = document.body.classList.contains('dark') 
        ? 'rgba(15, 23, 42, 0.98)' 
        : 'rgba(10, 37, 64, 0.98)';
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.padding = '1rem 0';
      header.style.background = document.body.classList.contains('dark') 
        ? 'rgba(15, 23, 42, 0.95)' 
        : 'rgba(10, 37, 64, 0.95)';
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    }
  }
});

// ========== 2. DARK MODE TOGGLE ==========
const darkToggle = document.getElementById('darkModeToggle');
if (darkToggle) {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
    darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  darkToggle.addEventListener('click', () => {
    // إضافة تأثير انتقال ناعم
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    document.body.classList.toggle('dark');
    
    // تدوير الأيقونة عند النقر
    darkToggle.style.transform = 'rotate(180deg)';
    setTimeout(() => darkToggle.style.transform = 'none', 300);

    if (document.body.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled');
      darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  });
}

// ========== 3. SCROLL ANIMATIONS (Intersection Observer) ==========
const animateOnScroll = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // تطبيق الأنيميشن على البطاقات والأقسام
  const animatedElements = document.querySelectorAll('.feature-card, .lawyer-card, .question-card, .stats-row .stat');
  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
    observer.observe(el);
  });
};

// تشغيل الأنيميشن عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', animateOnScroll);

// ========== 4. TRANSLATIONS DATABASE ==========
const translationsDB = {
  en: {
    nav_home: "Home", nav_forum: "Forum", nav_consultations: "Consultations", nav_login: "Login", nav_register: "Sign Up",
    footer_tagline: "LegalTech platform · Algeria", footer_about: "About Us", footer_terms: "Terms of Use", footer_privacy: "Privacy Policy", footer_disclaimer: "Disclaimer", footer_support: "Support", footer_copyright: "Legal Innovation",
    hero_title: "Connect with Certified Lawyers in Algeria", hero_desc: "LexTech DZ bridges justice & technology — trusted legal advice, verified experts, and transparent pricing.", hero_btn1: "📅 Book a Consultation", hero_btn2: "💬 Ask the Community",
    stat_lawyers: "Certified Lawyers", stat_cases: "Legal Questions Solved", stat_satisfaction: "Client Satisfaction",
    features_title: "Why LexTech DZ?", feature1_title: "Verified Lawyers", feature1_desc: "Official bar association credentials & golden badge assurance.", feature2_title: "Transparent Pricing", feature2_desc: "Fixed fees, no hidden costs — 20% platform commission only.", feature3_title: "Legal Forum", feature3_desc: "Free community advice with lawyer-verified answers.", feature4_title: "Secure & Confidential", feature4_desc: "End-to-end encrypted sessions and data protection.",
    cta_title: "Ready to get professional legal support?", cta_btn: "Join LexTech DZ Today →",
    forum_title: "Legal Forum", forum_subtitle: "Ask questions, get verified answers from certified lawyers", forum_cat_all: "All Topics", forum_cat_admin: "Administrative Law", forum_cat_family: "Family Law", forum_cat_commercial: "Commercial Law", ask_question: "Ask a Legal Question",
    consult_title: "Premium Legal Consultations", consult_sub: "Choose a certified lawyer and book a private session. Secure payment & guaranteed follow-up.", book_btn: "Book Consultation",
    login_title: "Sign In to LexTech DZ", login_citizen: "Citizen", login_lawyer: "Lawyer", login_admin: "Admin", login_email: "Email address", login_password: "Password", login_btn: "Login", login_register_link: "Don't have an account? Register here",
    register_title: "Create Account", register_fullname: "Full Name", register_email: "Email", register_password: "Password", register_btn: "Register", register_login_link: "Already registered? Login"
  },
  fr: {
    nav_home: "Accueil", nav_forum: "Forum", nav_consultations: "Consultations", nav_login: "Connexion", nav_register: "Inscription",
    footer_tagline: "Plateforme LegalTech · Algérie", footer_about: "À propos", footer_terms: "Conditions d'utilisation", footer_privacy: "Politique de confidentialité", footer_disclaimer: "Avertissement", footer_support: "Support", footer_copyright: "Innovation juridique",
    hero_title: "Connectez-vous avec des avocats certifiés", hero_desc: "LexTech DZ relie la justice et la technologie — conseils de confiance, experts vérifiés et prix transparents.", hero_btn1: "📅 Réserver une consultation", hero_btn2: "💬 Demander à la communauté",
    stat_lawyers: "Avocats certifiés", stat_cases: "Questions résolues", stat_satisfaction: "Satisfaction client",
    features_title: "Pourquoi LexTech DZ ?", feature1_title: "Avocats vérifiés", feature1_desc: "Identifiants officiels du barreau et garantie du badge d'or.", feature2_title: "Prix transparents", feature2_desc: "Frais fixes, sans coûts cachés — seulement 20% de commission.", feature3_title: "Forum juridique", feature3_desc: "Conseils communautaires gratuits avec réponses vérifiées.", feature4_title: "Sécurisé et confidentiel", feature4_desc: "Sessions cryptées de bout en bout et protection des données.",
    cta_title: "Prêt à obtenir un soutien professionnel ?", cta_btn: "Rejoindre LexTech DZ aujourd'hui →",
    forum_title: "Forum juridique", forum_subtitle: "Posez des questions, obtenez des réponses vérifiées", forum_cat_all: "Tous les sujets", forum_cat_admin: "Droit administratif", forum_cat_family: "Droit de la famille", forum_cat_commercial: "Droit commercial", ask_question: "Poser une question",
    consult_title: "Consultations premium", consult_sub: "Choisissez un avocat certifié et réservez une session privée.", book_btn: "Réserver une consultation",
    login_title: "Connectez-vous à LexTech DZ", login_citizen: "Citoyen", login_lawyer: "Avocat", login_admin: "Admin", login_email: "Adresse e-mail", login_password: "Mot de passe", login_btn: "Connexion", login_register_link: "Vous n'avez pas de compte ? Inscrivez-vous",
    register_title: "Créer un compte", register_fullname: "Nom complet", register_email: "E-mail", register_password: "Mot de passe", register_btn: "S'inscrire", register_login_link: "Déjà inscrit ? Connexion"
  },
  ar: {
    nav_home: "الرئيسية", nav_forum: "المنتدى", nav_consultations: "الاستشارات", nav_login: "تسجيل الدخول", nav_register: "إنشاء حساب",
    footer_tagline: "منصة التكنولوجيا القانونية · الجزائر", footer_about: "من نحن", footer_terms: "شروط الاستخدام", footer_privacy: "سياسة الخصوصية", footer_disclaimer: "إخلاء المسؤولية", footer_support: "الدعم", footer_copyright: "الابتكار القانوني",
    hero_title: "تواصل مع نخبة المحامين المعتمدين في الجزائر", hero_desc: "ليكس تيك ديزي تربط العدالة بالتكنولوجيا — استشارات موثوقة، خبراء معتمدون، وأسعار شفافة.", hero_btn1: "📅 احجز استشارة", hero_btn2: "💬 اسأل المجتمع",
    stat_lawyers: "محامون معتمدون", stat_cases: "قضايا تم حلها", stat_satisfaction: "رضا العملاء",
    features_title: "لماذا منصة ليكس تيك ديزي؟", feature1_title: "محامون موثقون", feature1_desc: "اعتمادات رسمية من نقابة المحامين مع توثيق الشارة الذهبية.", feature2_title: "شفافية في الأسعار", feature2_desc: "رسوم واضحة مسبقاً — عمولة المنصة 20% فقط.", feature3_title: "منتدى قانوني تفاعلي", feature3_desc: "استفسارات مجانية مع إجابات دقيقة من المحامين.", feature4_title: "سرية وأمان تام", feature4_desc: "تشفير شامل للمحادثات وحماية مطلقة للبيانات.",
    cta_title: "هل أنت مستعد للحصول على استشارة احترافية؟", cta_btn: "انضم إلى المنصة الآن ←",
    forum_title: "المنتدى القانوني", forum_subtitle: "اطرح أسئلتك واحصل على توجيهات موثقة من أهل الاختصاص", forum_cat_all: "جميع المواضيع", forum_cat_admin: "القانون الإداري", forum_cat_family: "قانون الأسرة", forum_cat_commercial: "القانون التجاري", ask_question: "اطرح سؤالاً قانونياً",
    consult_title: "الاستشارات القانونية الخاصة", consult_sub: "اختر محاميك المفضل واحجز جلستك بكل سرية وأمان.", book_btn: "احجز الآن",
    login_title: "تسجيل الدخول", login_citizen: "مواطن", login_lawyer: "محامٍ", login_admin: "مدير", login_email: "البريد الإلكتروني", login_password: "كلمة المرور", login_btn: "دخول", login_register_link: "ليس لديك حساب؟ سجل من هنا",
    register_title: "إنشاء حساب جديد", register_fullname: "الاسم واللقب", register_email: "البريد الإلكتروني", register_password: "كلمة المرور", register_btn: "إنشاء حساب", register_login_link: "لديك حساب بالفعل؟ سجل دخولك"
  }
};

let currentLang = localStorage.getItem('preferredLang') || 'en';

function applyTranslations(lang) {
  // إضافة تأثير تلاشي خفيف عند تغيير اللغة
  document.body.style.opacity = '0.8';
  
  setTimeout(() => {
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
    
    // ضبط اتجاه الصفحة (RTL / LTR)
    if (lang === 'ar') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.removeAttribute('dir');
    }
    
    // تحديث الأيقونة والنص في زر اللغة (باستخدام أيقونة FontAwesome لضمان ظهورها في كل الأجهزة)
const currentLangLabel = document.getElementById('currentLangLabel');
if (currentLangLabel) {
  const langIcons = { 
    en: '<i class="fas fa-globe"></i> EN', 
    fr: '<i class="fas fa-globe"></i> FR', 
    ar: '<i class="fas fa-globe"></i> AR' 
  };
  currentLangLabel.innerHTML = langIcons[lang] || '<i class="fas fa-globe"></i> EN';
}

document.body.style.opacity = '1';
}, 150);
}
// ========== 5. LANGUAGE TOGGLE BUTTON ==========
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

// التطبيق الأولي للغة عند تحميل الصفحة
applyTranslations(currentLang);

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const icon = document.querySelector('.dark-toggle i');
  if (document.body.classList.contains('dark')) {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}

function toggleLanguage() {
  const langLabel = document.getElementById('langLabel');
  if (langLabel.textContent === '🇫🇷 FR') {
    langLabel.textContent = '🇬🇧 EN';
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  } else if (langLabel.textContent === '🇬🇧 EN') {
    langLabel.textContent = '🇩🇿 AR';
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  } else {
    langLabel.textContent = '🇫🇷 FR';
    document.documentElement.lang = 'fr';
    document.documentElement.dir = 'ltr';
  }
}

// ========== 6. PREMIUM TERMS MODAL (Fallback) ==========
// هذه الدالة تعمل إذا لم يكن المودال المخصص موجوداً في الصفحة (مثلاً في صفحات التسجيل)
function showTermsModal() {
  if (window.location.pathname.includes('terms.html') || 
      window.location.pathname.includes('privacy.html') || 
      window.location.pathname.includes('disclaimer.html')) {
    return;
  }
  
  // التحقق مما إذا كان مودال الهيرو موجوداً (لتجنب التكرار)
  if(document.getElementById('termsModal')) return;
  
  const modal = document.createElement('div');
  modal.id = 'dynamicTermsModal';
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(10, 37, 64, 0.85); backdrop-filter: blur(10px);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000; opacity: 0; transition: opacity 0.4s ease;
  `;
  
  modal.innerHTML = `
    <div style="background: var(--bg-white); max-width: 550px; width: 90%; border-radius: 24px; padding: 2.5rem; text-align: center; box-shadow: 0 25px 50px rgba(0,0,0,0.3); transform: translateY(30px); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);">
      <div style="width: 80px; height: 80px; background: rgba(212, 175, 55, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
        <i class="fas fa-balance-scale" style="font-size: 2.5rem; color: var(--gold);"></i>
      </div>
      <h2 style="font-size: 1.8rem; margin-bottom: 1rem; color: var(--text-dark);">Welcome to LexTech DZ</h2>
      <p style="color: var(--text-gray); margin-bottom: 2rem;">By accessing this platform, you agree to our Terms of Use, Privacy Policy, and Legal Disclaimer.</p>
      
      <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 16px; text-align: left; border: 1px solid var(--border-light); margin-bottom: 2rem;">
        <ul style="list-style: none; padding: 0; margin: 0; color: var(--text-dark); font-size: 0.95rem;">
          <li style="margin-bottom: 0.8rem;"><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 8px;"></i> We ensure strict Data Privacy (Law 18-07).</li>
          <li style="margin-bottom: 0.8rem;"><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 8px;"></i> Transparent 20% platform commission.</li>
          <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 8px;"></i> Certified and verified legal experts only.</li>
        </ul>
      </div>
      
      <div style="display: flex; gap: 1rem; justify-content: center;">
        <button id="declineTermsBtn" class="btn-outline" style="flex: 1;">Decline</button>
        <button id="acceptTermsBtn" class="btn-primary" style="flex: 1; box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);">I Accept All</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  
  // أنيميشن الدخول
  setTimeout(() => {
    modal.style.opacity = '1';
    modal.querySelector('div').style.transform = 'translateY(0)';
  }, 50);
  
  document.getElementById('acceptTermsBtn').addEventListener('click', () => {
    localStorage.setItem('termsAccepted', 'true');
    modal.style.opacity = '0';
    setTimeout(() => modal.remove(), 400);
  });
  
  document.getElementById('declineTermsBtn').addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
  });
}

// التحقق من قبول الشروط عند تحميل أي صفحة
if (!localStorage.getItem('termsAccepted')) {
  showTermsModal();
}

// ========== 7. MOBILE MENU TOGGLE ==========
const mobileIcon = document.getElementById('mobileMenuIcon');
if (mobileIcon) {
  mobileIcon.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    if (nav) {
      nav.classList.toggle('active');
      // تغيير شكل الأيقونة عند الفتح/الإغلاق
      const icon = mobileIcon.querySelector('i');
      if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });
}
