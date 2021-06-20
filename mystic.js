class mystic {
  constructor(x,y) {
    this.matrix = 'matrix.V1.cellular'
    this.matrixCode = [this.matrix.split(".")[1],';',x,';',y,';;']
    this.time = 0
  }

  addBlock(block,x,y) {
  	var id = 'Unknown'
  	switch(block) {
  		case 'reverse':
  			id = 1;
  			break;
  		case 'reverse2':
  			id = 2;
  			break;
  		case 'go':
  			id = 3
  			break;
  		case 'tile':
  			id = 4
  			break;
  		case 'tile2':
  			id = 5
  			break;
  		case 'unmovable':
  			id = 6
  			break;
  		case 'enemy':
  			id = 7
  			break;
  		case 'trash':
  			id = 8;
  			break;
  	}
  	if (this.time == 0) {
  	this.matrixCode.push(id+'.0.'+x+'.'+y)	
  	this.matrixCode.push(',')
  	} else {
  	this.matrixCode.push(',')
  	this.matrixCode.push(id+'.0.'+x+'.'+y)	
  	}


  }
  ensamble(){
  	this.matrixCode[this.matrixCode.length-1] = ';;'
  	return this.matrixCode.join('')
  }

}
