var w;
var columns;
var rows;
var board;
var next;
var first=true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  w = 20;
  
  columns = floor(width/w);
  rows = floor(height/w);
  
  board = new Array(columns);
  for (var i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  }
 
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
  init();
}

function draw() {
    background(255);
  generate();
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      if ((board[i][j] == 1)) fill(random(209,54,100),random(52,203,196),random(126,201,70));
      else fill(255);
      stroke(255);
     
			if(j < 12)
			  rect(i*w, j*w, w-1, w-1);
			else
				ellipse(i*w, j*w, w-1, w-1);
    }
  }

}
function mousePressed() {
  init();
}


function init() {
	if(!first){
    for (var i = 0; i < columns; i++) {
      for (var j = 0; j < rows; j++) {			
       next[i][j] = 0;
			 board[i][j] = 0;
			}
    }
  }
  first=false;
	var cC = floor(columns/2); 
	var cR = floor(rows/2); 


	board[1][1]=1;
	board[1][2]=1;
	board[1][3]=1;
	board[1][4]=1;
	board[1][5]=1;
	board[2][5]=1;
	board[3][5]=1;
	
	board[5][5]=1;
	board[5][4]=1;
	board[5][3]=1;
	board[5][2]=1;
	board[5][1]=1;
	board[6][1]=1;
	board[7][1]=1;
	board[7][2]=1;
	board[7][3]=1;
	board[7][4]=1;
	board[7][5]=1;
	board[6][3]=1;
	
	board[9][1]=1;
	board[9][2]=1;
	board[9][3]=1;
	board[9][4]=1;
	board[9][5]=1;
	board[10][5]=1;
	board[11][5]=1;
	board[11][4]=1;
	board[11][3]=1;
	board[11][2]=1;
	board[11][1]=1;

	
	board[13][5]=1;
	board[13][4]=1;
	board[13][3]=1;
	board[13][2]=1;
	board[13][1]=1;
	board[14][1]=1;
	board[15][1]=1;
	board[15][2]=1;
	board[15][3]=1;
	board[14][3]=1;
	board[14][4]=1;
	board[15][5]=1;

	
	board[17][5]=1;
	board[17][4]=1;
	board[17][3]=1;
	board[17][2]=1;
	board[17][1]=1;
	board[18][1]=1;
	board[19][1]=1;
	board[19][2]=1;
	board[19][3]=1;
	board[19][4]=1;
	board[19][5]=1;
	board[18][3]=1;
	
	
	board[61][21]=1;
	board[60][21]=1;
	board[60][20]=1;
	board[59][20]=1;
	board[59][19]=1;
	board[58][20]=1;
	board[58][21]=1;
	board[58][23]=1;
	board[58][24]=1;
	
	board[54][24]=1;
	board[54][23]=1;
	board[54][21]=1;
	board[54][20]=1;
	board[53][20]=1;
	board[53][19]=1;
	board[52][20]=1;
	board[52][21]=1;
	board[51][21]=1;
	
	
	board[60][11]=1;
	board[60][10]=1;
	board[59][11]=1;
	board[59][10]=1;
	
	
	board[46][13]=1;
	board[46][12]=1;
	board[46][11]=1;
	board[46][7]=1;
	board[46][6]=1;
	board[46][5]=1;
	board[45][13]=1;
	board[45][10]=1;
	board[45][8]=1;
	board[45][5]=1;
	board[44][13]=1;
	board[44][5]=1;
	board[42][12]=1;
	board[42][6]=1;
	board[41][11]=1;
	board[41][10]=1;
	board[41][8]=1;
	board[41][7]=1;
	
	board[29][13]=1;
	board[29][12]=1;
	board[29][6]=1;
	board[29][5]=1;
	board[28][12]=1;
	board[28][13]=1;
	board[28][6]=1;
	board[28][5]=1;
	
	board[13][24]=1;
	board[13][23]=1;
	board[13][22]=1;
	board[12][24]=1;
	board[12][21]=1;
	board[11][24]=1;
	board[10][24]=1;
	board[10][20]=1;
	board[9][24]=1;
	board[8][23]=1;
	board[8][21]=1;
	
	
	board[55][1]=1;
	board[55][2]=1;
	board[56][1]=1;
	board[57][2]=1;
	board[58][3]=1;
	board[59][2]=1;
	board[59][3]=1;
	
	board[1][15]=1;
	board[1][17]=1;
	board[2][18]=1;
	board[3][18]=1;
	board[4][18]=1;
	board[5][18]=1;
	board[5][17]=1;
	board[5][16]=1;
	board[4][15]=1;
	
	
	board[4][10]=1;
	board[5][10]=1;
	board[6][10]=1;
	board[6][9]=1;
	board[5][8]=1;
	
	
}

function generate() {

  
  for (var x = 1; x < columns - 1; x++) {
    for (var y = 1; y < rows - 1; y++) {
      
      var neighbors = 0;
      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }

      
      neighbors -= board[x][y];
      
      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           
      else                                             next[x][y] = board[x][y]; 
    }
  }

  
  var temp = board;
  board = next;
  next = temp;
}