window.LexTechPayment = {
  simulatePayment: function(lawyerName, amount) {
    let platformPercent = 20, lawyerPercent = 80;
    let platformShare = (amount * platformPercent)/100;
    let lawyerShare = (amount * lawyerPercent)/100;
    let resultDiv = document.getElementById('paymentResult');
    if(resultDiv) resultDiv.innerHTML = `<div style="background:#e6f7e6; padding:1rem; border-radius:8px;">✅ Payment simulated (Edahabia/CIB)<br>💰 Total: ${amount} DZD<br>🏢 LexTech DZ (20%): ${platformShare} DZD<br>⚖️ Lawyer ${lawyerName} (80%): ${lawyerShare} DZD<br><small>Transaction complete. Receipt sent.</small></div>`;
    console.log(`Payment | Lawyer: ${lawyerName} | Total:${amount} | Platform:${platformShare} | Lawyer:${lawyerShare}`);
  }
};