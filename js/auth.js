document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  let role = document.querySelector('.role-tab.active')?.dataset.role;
  localStorage.setItem('userRole', role);
  if(role==='admin') window.location.href='dashboard/admin.html';
  else if(role==='lawyer') window.location.href='dashboard/lawyer.html';
  else window.location.href='dashboard/user.html';
});
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  let role = document.querySelector('.role-tab.active')?.dataset.role;
  if(role==='lawyer') alert('Registration submitted for verification (admin approval required).');
  else alert('Citizen registration successful! Please login.');
});
document.querySelectorAll('.role-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.role-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    let lawyerFields = document.getElementById('lawyerFields');
    if(lawyerFields) lawyerFields.style.display = tab.dataset.role === 'lawyer' ? 'block' : 'none';
  });
});