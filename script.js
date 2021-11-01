var table = document.createElement("table");
var bomb = document.querySelector("#bomb-template").content.firstElementChild;
var size = {x:20, y:15};
var cells =[];
var timer = 
{
    get seconds()
    {
        let digits = [...document.querySelector("#timer").children].map(el=>el.innerHTML);
        return +digits.join("");
    },
    set seconds(value)
    {
        let elements = document.querySelector("#timer").children;
        for(let i=0; i<elements.length; i++)
        {
            elements[i].innerHTML = (value + "").padStart(elements.length,0).split("")[i];
        }
    },

    start()
    {
        this.interval = setInterval(e=>this.seconds++, 1000);
    },
    stop()
    {
        if(this.interval)
        {
            clearInterval(this.interval);
        }
    },
    reset()
    {
        this.stop();
        this.seconds = 0;
    }
}
var firstClick = true;

for(let i=0; i<size.y; i++)
{
    let tr = document.createElement("tr");
    let row = [];
    for(let j=0; j<size.x; j++)
    {
        let td = document.createElement("td");
        td.addEventListener("mousedown",e=>{
            e.target.classList.add("clicked");
            if(firstClick)
            {
                cells[i][j].bomb = false;
                for(let neighbour of getNeighbours(j,i))
                {
                    neighbour.bomb = false;
                }
                firstClick = false;
                timer.start();
            }
            startWalking(j,i);
        });
        row.push({x:j, y:i, el:td, bomb:Math.random()>0.8});
        tr.appendChild(td);
    }
    table.appendChild(tr);
    cells.push(row);
}

document.querySelector("#container").appendChild(table);


function startWalking(x,y)
{
    if(cells[y][x].bomb)
    {
        end();
    }
    else
    {
        open(x,y);
    }
}

function getNeighbours(x,y)
{
    var neighbours = [];

    for(let i = Math.max(0,y-1); i <= Math.min(size.y-1,y+1); i++)
    {
        for(let j = Math.max(0,x-1); j <= Math.min(size.x-1,x+1); j++)
        {
            if(!(i == y && j == x ) && !cells[i][j].el.classList.contains("clicked"))
            {
                neighbours.push(cells[i][j]);
            }
        }
    }

    return neighbours;
}

function open(x,y)
{
    var bombCount = getBombCount(x,y);
    cells[y][x].el.classList.add("clicked");
    if(bombCount == 0)
    {
        for(let neighbour of getNeighbours(x,y))
        {
            open(neighbour.x, neighbour.y);
        }
    }
    else
    {
        cells[y][x].el.innerText = bombCount;

    }

    
}

function getBombCount(x,y)
{
    var n = 0;

    for(let i = Math.max(0,y-1); i <= Math.min(size.y-1,y+1); i++)
    {
        for(let j = Math.max(0,x-1); j <= Math.min(size.x-1,x+1); j++)
        {
            if(cells[i][j].bomb)
            {
                n++;
            }
        }
    }

    return n;
}

function end()
{
    for(let i=0; i<cells.length; i++)
    {
        for(let j=0; j<cells[i].length; j++)
        {
           if(cells[i][j].bomb)
           {
               cells[i][j].el.appendChild(bomb.cloneNode(true));
           }
        }
    }
    alert("game over");
    reset();
}

function reset()
{
    for(let i=0; i<cells.length; i++)
    {
        for(let j=0; j<cells[i].length; j++)
        {
            cells[i][j].el.className = "";
            cells[i][j].el.innerHTML = "";
            cells[i][j].bomb = Math.random() > 0.8;
        }
    }
    firstClick = true;
    timer.reset();
}
