# html

https://www.youtube.com/watch?v=ICY-l3W_lDc

Live Server
https://fonts.google.com/specimen/Poppins?query=popp
https://cssgradient.io/

GitHub // How to create repository and upload project:
https://www.youtube.com/watch?v=xxVHjPJ8mUE

git clone https://github.com/petlytskyiOne/html.git
cd html
git status
git add . / git add -A
git commit -m "add"
git push
git pull
git
Esc :wq

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/petlytskyiOne/html.git
git push -u origin main

git remote add origin https://github.com/petlytskyiOne/html.git
git branch -M main
git push -u origin main

Це виведення команди git help, яке надає короткий опис кожної з основних команд Git разом з їхнім призначенням. Нижче наведено короткий переклад кожної команди:

start a working area (розпочати робочу область):

clone: Клонувати репозиторій в новий каталог.
init: Створити порожній репозиторій Git або повторно ініціалізувати існуючий.
work on the current change (працюйте над поточними змінами):

add: Додати вміст файлів до індексу.
mv: Перемістити або перейменувати файл, каталог або символічне посилання.
restore: Відновити файли робочого дерева.
rm: Видалити файли з робочого дерева та індексу.
examine the history and state (досліджуйте історію та стан):

bisect: Використовуйте бінарний пошук для знаходження коміту, який ввів помилку.
diff: Показати зміни між комітами, комітом та робочим деревом тощо.
grep: Вивести рядки, які відповідають патерну.
log: Показати журнали комітів.
show: Показати різні типи об'єктів.
status: Показати стан робочого дерева.
grow, mark and tweak your common history (розвивайте, маркуйте та налаштовуйте свою загальну історію):

branch: Список, створення або видалення гілок.
commit: Записати зміни в репозиторій.
merge: Об'єднати дві або більше історії розробки.
rebase: Знову застосувати коміти на верх іншої базової версії.
reset: Скинути поточний HEAD до вказаного стану.
switch: Перемкнутися між гілками.
tag: Створити, переглянути, видалити або перевірити тегований об'єкт, підписаний за допомогою GPG.
collaborate (співпрацювати):

fetch: Завантажити об'єкти та посилання з іншого репозиторію.
pull: Витягнути та інтегрувати з іншого репозиторію або локальної гілки.
push: Оновити віддалені посилання разом із пов'язаними об'єктами.
Це основні команди Git, які використовуються в різних ситуаціях розробки програмного забезпечення. Команда git help -a або git help -g надає список доступних підкоманд та деяких понять.

usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
[--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
[-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
[--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
[--config-env=<name>=<envvar>] <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
clone Clone a repository into a new directory
init Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
add Add file contents to the index
mv Move or rename a file, a directory, or a symlink
restore Restore working tree files
rm Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
bisect Use binary search to find the commit that introduced a bug
diff Show changes between commits, commit and working tree, etc
grep Print lines matching a pattern
log Show commit logs
show Show various types of objects
status Show the working tree status

grow, mark and tweak your common history
branch List, create, or delete branches
commit Record changes to the repository
merge Join two or more development histories together
rebase Reapply commits on top of another base tip
reset Reset current HEAD to the specified state
switch Switch branches
tag Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
fetch Download objects and refs from another repository
pull Fetch from and integrate with another repository or a local branch
push Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
