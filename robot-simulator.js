export class Robot{
    execute(instructions) {
        const words = instructions.split(' ');
            let x =parseInt( words[0]);
            let y = parseInt(words[1]);
            let bearing = words[2];
            let commands = words[3].split("");
        
            const directions = ["NORTH","EAST","SOUTH","WEST"];
            let dir_index = directions.findIndex(dir => dir === bearing);
        
            for (let i = 0; i < commands.length; i++) {
               if(commands[i] === "R"){
                    if(dir_index==3){
                        dir_index=0;
                    }else{
                        dir_index++;
                    }
               }else if(commands[i] === "L"){
                    if(dir_index==0){
                        dir_index=3;
                    }else{
                        dir_index--;
                    }
               }else if(commands[i] === "A"){
                    if(dir_index == 0) y++;
                    else if(dir_index == 1) x++;
                    else if(dir_index == 2) y--;
                    else if(dir_index == 3) x--;
               }
              }
             return x + " " + y + " " + directions[dir_index];
    
        }
}