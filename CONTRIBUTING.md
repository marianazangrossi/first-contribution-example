# Guia de contribuição

## Como contribuir?
1. Faça um fork do repositório.
![Passo 01](https://raw.githubusercontent.com/marianazangrossi/first-contribution-example/main/images/passo%201.png)
2. Faça um clone do seu repositório na sua máquina.
![Passo 02](https://raw.githubusercontent.com/marianazangrossi/first-contribution-example/main/images/passo%202.png)
```shell
git clone https://github.com/SEU_USUARIO/first-contribution-example.git
```
3. Entre no projeto e crie uma nova branch.
```
cd first-contribution-example
git checkout -b NOME_DA_SUA_BRANCH
```
4. Faça as alterações necessárias.
5. Salve as alterações e envie para seu repositório.
```
git add .
git commit -m "SUA MENSAGEM DE COMMIT VEM AQUI!"
git push origin NOME_DA_SUA_BRANCH
```
6. Entre no repositório original
![Passo 03](https://raw.githubusercontent.com/marianazangrossi/first-contribution-example/main/images/passo%203.png)
7. Verifique se as branchs selecionadas são as corretas para abrir o Pull Request.
![Passo 04](https://raw.githubusercontent.com/marianazangrossi/first-contribution-example/main/images/passo%204.png)
8. Pull Request aberto!! 🎉🎉🎉🎉🎉🎉
![Passo 05](https://raw.githubusercontent.com/marianazangrossi/first-contribution-example/main/images/passo%205.png)

## Como atualizar meu repositório, depois que clonado?
**Obs**: Após clonar seu repositório, é importante mantê-lo atualizado com o repositório original, pois pode haver alterações que conflitem com o que você alterou. Os passos a seguir deve ser feito no terminal, no seu repositório local.

1. Adicione o repositório original como ``upstream``.
```
git remote add upstream https://github.com/marianazangrossi/first-contribution-example
```

2. Atualize seu repositório local
```
git pull upstream master
```

3. Continue fazendo suas alterações de acordo com a seção acima!
