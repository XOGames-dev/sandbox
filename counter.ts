let text: string = document.getElementById(text);
let i: number;
let w: number = 0;

for (i = 0; i <= text.length; i++)
{
    if (string[i] == " ")
        w++;
}
document.getElementById(result) = w;

