function calculateSalary() {
  let basic = parseFloat(document.getElementById('basic').value) || 0;
  let hra = parseFloat(document.getElementById('hra').value) || 0;
  let allowances = parseFloat(document.getElementById('allowances').value) || 0;
  let otherEarnings = parseFloat(document.getElementById('otherEarnings').value) || 0;
  
  let pf = parseFloat(document.getElementById('pf').value) || 0;
  let ptax = parseFloat(document.getElementById('ptax').value) || 0;
  let otherDeductions = parseFloat(document.getElementById('otherDeductions').value) || 0;

  let totalEarnings = basic + hra + allowances + otherEarnings;
  let totalDeductions = pf + ptax + otherDeductions;
  let netSalary = totalEarnings - totalDeductions;

  document.getElementById('totalEarnings').innerText = totalEarnings.toFixed(2);
  document.getElementById('totalDeductions').innerText = totalDeductions.toFixed(2);
  document.getElementById('netSalary').innerText = netSalary.toFixed(2);

}

window.onload = calculateSalary;


