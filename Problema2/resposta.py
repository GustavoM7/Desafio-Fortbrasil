import sys

#função para formatação ',' e 0 à direita
def correct_format(answer):
    intenger, decimal = answer.split(".")               #Seprando parte decimal e inteira

    while len(decimal) < 2:
        decimal = decimal + '0'                         #inserindo 0 a direita pra precisão de duas casas

    return intenger+','+decimal                         #retornando string no formato requerido


try:
    n = int(input())                                    #Recebendo quantidade de casos de teste a serem dados

    arr = [0] * n                                       #Gerando array que armazenará cada input

    for i in range(0, n):                               #Recebendo cada input em loop
        arr[i] = input()

        if len(arr[i]) < 9 or len(arr[i]) > 10000:      #Caso de exeção do tamanho da entrada
            sys.exit(1)

    for i in range(0, n):
        answer = str(len(arr[i]) * 0.01)                #Gerando saída para cada do entrada dada
        print(correct_format(answer), end=' ')          #Ajustando formado da saída e exibindo solução

except:
    print("Erro inesperado...")
    sys.exit(1)