// Your objective is to complete a function createSpiral(N) that receives an 
// integer N and returns two-dimensional array where numbers from 1 to N^2 should be 
// represented as clockwise spiral.
// Return an empty array if N < 1

// Ex. createSpiral(5) should yield: 
// 1  2  3  4  5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9


function createSpiral(n) {
	var spiral = [];
	// nested for loop initializes matrix with n arrays of n elements (all 0s)
	for (var i = 0; i < n; i++) {
		var temp = [];
		for (var j = 0; j < n; j++) {
			temp.push(0);
	  	}
	  	spiral.push(temp);
	}

	var rightBoundary = n;
	var leftBoundary = 0;
	var topBoundary = 0;
	var bottomBoundary = n;
	var nextNum = 1;
	var currRow = 0;
	var currColumn = 0;

	while (nextNum <= n*n) {
		// left to right
		for (var i = leftBoundary; i < rightBoundary; i++) {
			spiral[currRow][i] = nextNum;
			nextNum++;
			currColumn = i;
		}

		topBoundary++;

		// top to bottom
		for (var i = topBoundary; i < bottomBoundary; i++) {
			spiral[i][currColumn] = nextNum;
			nextNum++;
			currRow = i;
		}

		rightBoundary--;

		// right to left
		for (var i = rightBoundary - 1; i >= leftBoundary; i--) {
			spiral[currRow][i] = nextNum;
			nextNum++;
			currColumn = i;
		}

		bottomBoundary--;

		// bottom to top
		for (var i = bottomBoundary - 1; i >= topBoundary; i--) {
			spiral[i][currColumn] = nextNum;
			nextNum++;
			currRow = i;
		}

		leftBoundary++;
	}

}

// Solution: As the algorithm travels through the 2D array, it adjusts the boundaries that indicate
// which cells are still to be filled in.
