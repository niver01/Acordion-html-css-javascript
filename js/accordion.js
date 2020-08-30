const accordionTitle = document.querySelectorAll('.accordion__title'),
	accordionContent = document.querySelectorAll('.accordion__content');

// eventos para los titulos
for (let i = 0; i < accordionTitle.length; i++) {
	const title = accordionTitle[i];

	title.addEventListener('click', () => {
		const index = i;

		accordionTitle[index].classList.toggle('active');
		accordionContent[index].classList.toggle('active');

		for (let f = 0; f < accordionTitle.length; f++) {
			if (f !== i) {
				accordionTitle[f].classList.remove('active');
				accordionContent[f].classList.remove('active');
			}
		}
	});
}
