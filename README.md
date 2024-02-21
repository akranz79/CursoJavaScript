# CursoJavaScript
Curso de Javascript


Aula #04

Comandos javascript:

window.alert("texto")
window.prompt()

Aula #06

Formas de guardar e mostrar o valor da variavel:

var nome = Alexandre
var idade = 44

"O Aluno" +nome+ "tem "+idade+" anos."

Template Strings:
`O aluno ${nome} tem ${idade} anos`.

formatar variavel numerica:
n1.toFixed(2).replace('.', ',')
n1.toLocaleString('pt-BR', {style: 'currency', currency: "BRL'})

Aula #7

Operadores Aritméticos:

5 +  2 = 7
5 -  2 = 3
5 *  2 = 10
5 /  2 = 2.5
5 %  2 = 1
5 ** 2 = 25

Precedencia
()
**
* /
+ - 

() ** /
>< >=
!
&&
||

Operador ternario:

teste ? true : false

teste >=7 ? "aprovado" : "reprovado"