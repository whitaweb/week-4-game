$(document).ready(function() {




// Define variables for counter, wins, losses.

var counter = 0;
var wins = 0;
var losses = 0;
	




	// Create function for random computer number between 19-120
	var randomNumber = Math.floor(Math.random() * 101) + 19;

	console.log(randomNumber);

	$('#value').html(randomNumber);

// Reset = reset counter to zero, assign new randon number to target number, assign new random numbers to images. 

function reset () {

	randomNumber = Math.floor(Math.random() * 101) + 19;
	$('#value').html(randomNumber);
	img1Num = Math.floor(Math.random() * 12) + 1;
	img2Num = Math.floor(Math.random() * 12) + 1;
	img3Num = Math.floor(Math.random() * 12) + 1;
	img4Num = Math.floor(Math.random() * 12) + 1;
	counter = 0;
}



	// Create function for random crystal numbers.

	var img1Num = Math.floor(Math.random() * 12) + 1;

	console.log(img1Num);

	// When image 1 is clicked, assign random number from img1Num variable to image and add random
		// number to counter. 

		$('#img1').on('click', function() {


			counter = counter + parseInt(img1Num);
			console.log("Counter:" + counter);

			$('#counter').html(counter);

	// If/Else Target Number
	// If the target number equals the counter then add 1 to wins,
	// alert you won, and reset the game. Else counter is greater than
	// target number, add 1 to losses, and reset the game. 

			if (counter === randomNumber){
				$('#status').html('You won!');
				wins ++;
				$('#win').html(wins);
				console.log(wins)
				reset();


			} else if ( counter > randomNumber){
				$('#status').html('You lost!')
				losses ++;
				$('#loss').html(losses);
				console.log(losses)
				reset();

			}

		});


			var img2Num = Math.floor(Math.random() * 12) + 1;

			console.log(img2Num);

			$('#img2').on('click', function() {


				counter = counter + parseInt(img2Num);
				console.log("Counter:" + counter);

				$('#counter').html(counter);

				if (counter === randomNumber){
					$('#status').html('You won!');
					wins ++;
					$('#win').html(wins);
					console.log(wins)
					reset();


				} else if ( counter > randomNumber){
					$('#status').html('You lost!')
					losses ++;
					$('#loss').html(losses);
					console.log(losses)
					reset();

				}
			});
			
			var img3Num = Math.floor(Math.random() * 12) + 1;

			console.log(img3Num);

			$('#img3').on('click', function() {


				counter = counter + parseInt(img3Num);
				console.log("Counter:" + counter);

				$('#counter').html(counter);

				if (counter === randomNumber){
					$('#status').html('You won!');
					wins ++;
					$('#win').html(wins);
					console.log(wins)
					reset();


				} else if ( counter > randomNumber){
					$('#status').html('You lost!')
					losses ++;
					$('#loss').html(losses);
					console.log(losses)
					reset();

				}
			});

			var img4Num = Math.floor(Math.random() * 12) + 1;

			console.log(img4Num);

			$('#img4').on('click', function() {


				counter = counter + parseInt(img4Num);
				console.log("Counter:" + counter);

				$('#counter').html(counter);

				if (counter === randomNumber){
					$('#status').html('You won!');
					wins ++;
					$('#win').html(wins);
					console.log(wins)
					reset();


				} else if ( counter > randomNumber){
					$('#status').html('You lost!')
					losses ++;
					$('#loss').html(losses);
					console.log(losses)
					reset();

				}
			});
			
});
			


 


// Rachel Vaughanhttps://oscarotero.com/jquery/
// 3:18 PMRachel Vaughanvar coinNumber = Math.floor((Math.random() * 12) + 1);
// 3:28 PMRachel Vaughan targetNumber = Math.floor(Math.random() * (121-19) + 19);





