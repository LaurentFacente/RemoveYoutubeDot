function removeNewnessDot() {
	const element = document.querySelector(
		"#newness-dot.style-scope.ytd-guide-entry-renderer"
	);
	if (element) {
		element.remove();
	}
}

// Observe DOM mutations to remove the element as soon as it appears
const observer = new MutationObserver(() => removeNewnessDot());
observer.observe(document.body, { childList: true, subtree: true });

// Remove immediately on page load
removeNewnessDot();
