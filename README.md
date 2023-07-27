## Executando o Projeto

* Abra a pasta do projeto
* Abra um terminal e execute o seguinte comando ```yarn install```
* Ao terminar de instalar o Yarn, o seguinte comando deverá ser executado ```yarn expo start```
* Após isso é só ler o QR Code com o App do Expo em seu Android.

## Lembrete
Quando o terminal mostrar o QR code para o Expo, em baixo dele há um ip como por exemplo ```http://192.168.15.4 ``` esse é seu Ip local da rede.
Pelo fato desse Ip mudar de rede para rede, é necessário alterar, dentro do launching.json do back-end, o Ip em que ele será executado para que os serviços consigam se comunicar.
