(function() {
	function updateSidebarVisibility() {
		var path = window.location.pathname;
		var isLabSection = path.startsWith('/qlab/');
		var isPkiSection = path.startsWith('/qpki/');

		var pkiSidebar = document.querySelector('[data-starlight-multi-sidebar-label="qpki"]');
		var labSidebar = document.querySelector('[data-starlight-multi-sidebar-label="qlab"]');

		if (pkiSidebar) {
			pkiSidebar.style.display = isLabSection ? 'none' : 'block';
		}
		if (labSidebar) {
			labSidebar.style.display = isPkiSection ? 'none' : 'block';
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', updateSidebarVisibility);
	} else {
		updateSidebarVisibility();
	}

	document.addEventListener('astro:after-swap', updateSidebarVisibility);
})();

(function() {
	function initFadeIn() {
		var els = document.querySelectorAll('.fade-in');
		if (!els.length) return;

		var observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

		els.forEach(function(el) { observer.observe(el); });
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initFadeIn);
	} else {
		initFadeIn();
	}

	document.addEventListener('astro:after-swap', initFadeIn);
})();
