function compute(event) {
	event.preventDefault();
	const valueInput = document.getElementById("principal");
	const value = parseInt(valueInput.value || 0);
	if (value < 1) {
		alert("Please, type a value greater than 0");
		valueInput.value = 1;
		setTimeout(()=> {
			valueInput.focus();
		}, 50)
		return;
	}
	const rate = document.getElementById("rate").value;
	const years = document.getElementById("years").value;
	const result = document.getElementById("result");

	const amount = rate ? parseInt(value) + parseInt(value * ((rate / 100) * parseInt(years))) : parseInt(value);

	var yearFromNow = new Date();
	yearFromNow.setFullYear(yearFromNow.getFullYear() + parseInt(years));

	result. innerHTML = `<div>If you deposit <span class="highlight">${value}</span>,</div>
	<div>at an interest rate of <span class="highlight">${rate}%</span>.</div>
	<div>You will receive an amount of <span class="highlight">${amount}</span>,</div>
	<div>in the year <span class="highlight">${yearFromNow.getFullYear()}</span></div>`;
}

function changeRate() {
	const rateInput = document.getElementById("rate");
	const rateValue = document.getElementById("rate-value");
	rateValue.innerText = rateInput.value + "%";
}

function changeValue() {
	const valueInput = document.getElementById("principal");
	const value = parseInt(valueInput.value || 0);
	if (value < 1) {
		alert("Please, type a value greater than 0");
		valueInput.value = 1;
		setTimeout(()=> {
			valueInput.focus();
		}, 50)
		return;
	}
}