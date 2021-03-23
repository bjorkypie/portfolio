

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

		}

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 400
		});

	// Nav Panel.

		// Toggle.
			$('<a href="#navPanel" class="navPanelToggle"></a>')
				.appendTo($header);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 5,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
			});

		}

		//strings to type
		let intro = `Hi, I'm Madeline!`
		let iAmA = 'I\'m a '
		let typeItems = ['Software Engineer.', 'Gardener', 'Designer.', 'Runner.', 'Web Application Builder.', 'Dog and Cat Referee.']
		//typing animations

		async function typingText () {
		  const node = document.querySelector("#type-text")

		  await sleep(500)
		  node.text = ""

		  while (true) {
				await sleep(2000)
		    await node.typing(intro)
		    await sleep(2000)
		    await node.delete(intro)
				await sleep(2000)
				await node.typing('I\'m a ')
				for(let i = 0; i < typeItems.length; i++){
					await node.typing(typeItems[i])
					await sleep(2000)
					await node.delete(typeItems[i])
					await sleep(1000)
				}
				await node.delete('I\'m a ')
				await sleep(1000)
				await node.typing('Does your project need a website?')
				await sleep(1000)
				await node.typing(' Open developer role at your company?')
				await sleep(1000)
				await node.typing(' Let\'s work together!')
				await sleep(3000)
				await node.delete('Does your project need a website? Open developer role at your company? Let\'s work together!')
		  }
		}
		//, Gardener, Software Engineer, Runner, CopyWriter, Designer, App Builder, Dog Walker, Cat Handler


		//Source code 🚩

		const sleep = time => new Promise(resolve => setTimeout(resolve, time))

		class TypeAsync extends HTMLSpanElement {
		  get text () {
		    return this.textContent
		  }
		  set text (value) {
		    return this.textContent = value
		  }

		  get typeInterval () {
		    const randomMs = 100 * Math.random()
		    return randomMs < 50 ? 10 : randomMs
		  }

		  async typing (text) {
		    for (let character of text) {
		      this.text += character
		      await sleep(this.typeInterval)
		    }
		  }

		  async delete (text) {
		    for (let character of text) {
		      this.text = this.text.slice(0, this.text.length -1)
		      await sleep(this.typeInterval)
		    }
		  }
		}

		customElements.define('type-async', TypeAsync, { extends: 'span' })


		typingText()
})(jQuery);
