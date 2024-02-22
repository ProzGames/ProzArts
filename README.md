# PROZ GAMES

## Uso do Git Flow
O **Git Flow** é um modelo de fluxo de trabalho amplamente utilizado por equipes de desenvolvimento de software. Ele foi criado pelo engenheiro de software holandês Vincent Driessen em 2010. O objetivo principal do Git Flow é melhorar a organização das ramificações (branches) dentro de repositórios Git, tornando o processo de desenvolvimento mais fluido e eficiente.

Aqui estão os principais conceitos do Git Flow:

1. **Branches Principais**:
  - **`develop`**: Essa é a branch principal para o desenvolvimento contínuo. Ela contém as funcionalidades que ainda estão sendo implementadas.
  - **`main`**: A branch `main` (ou `master`) é onde a versão estável do software é mantida. Alterações diretas nesta branch devem ser evitadas para manter a consistência da aplicação.

2. **Branches Temporárias**:
  - **`feature`**: Criada quando um membro da equipe precisa trabalhar em uma funcionalidade específica. As features são temporárias e não afetam a branch `develop` até serem finalizadas e mescladas de volta.
  - **`release`**: Criada quando todas as funcionalidades planejadas para uma versão foram concluídas. Nesta etapa, os testes são realizados antes de mesclar a versão final na branch `main`.

Vale lembrar que as branchs temporárias mencionadas fará uma cópia dos dados da atual (localmente) branch de desenvolvimento.

## **Códigos**
Para inicializar o git flow no seu projeto, você deve ter, no mínimo, inicializado um repositório com `git init`. O comando para inicializar o git flow é `git flow init`. Lembrando que para puxar e enviar modificações do/para o GitHub, é necessário que os repositórios estejam devidamente vinculados, tanto o local quanto o remoto.

1. **`Develop`**: quando concluir as configurações iniciais, o próprio git lhe redirecionará para a branch de desenvolvimento. Portanto, não precisa ser criada, como informado anteriormente.
2. **`feature`**: 
  - para criar basta usar
```Bash
git flow feature start "<"nome da branch">"
```
  - para publicá-la no Github você precisa ter no mínimo um commit a ser publicado (`git add .`, `git commit -m "mensagem aqui"`) e usar
```Bash
git flow feature publish "<"nome da branch">"
```
  - para finalizá-la e fazer o merge com a branch develop, basta usar
```Bash
git flow feature finish "<"nome da branch">"
```
2. **`release`**:
  - para criar basta usar
```Bash
git flow release start "<"numero da versão de preferencia">"
```
  - para finalizá-la e fazer o merge com a branch `main`, basta usar
```Bash
git flow feature finish -m "sua mensagem" "<"numero da versão de preferencia">"
```
Mas isso não irá publicar levar as alterações para o repositório remoto. Para fazer isto você ainda precisará dos comandos `pull` e `push` do GitHub. Sendo mais especifico, você precisaria dar os dois comandos para atualizar as branchs principais, ou seja,
```Bash
git push origin main
git push origin develop
```
Uma alternativa a estes dois comando seria ir para a branch de desenvolvimento (`git checkout develop`) e usar o comando
```Bash
git push --all
```