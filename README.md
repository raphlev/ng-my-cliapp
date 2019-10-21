# ng-my-cliapp

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/ng-my-cliapp)

# Init Git repo
git init
git status

# Connect to distant repo using cliapp tag
git remote add cliapp https://github.com/raphlev/ng-my-cliapp.git
git remote -v

# Fetch the code from distant repo using cliapp tag
git fetch cliapp
git pull cliapp master

# Commit
git add .
git commit -m "This is my xx commit!"

# Push to distant repo using cliapp tag
git push -u cliapp master

# Change from local vscode
Source Control Git > Commit (automatic stage all changes + Vcommit) + Source Control Git > ...> push
# Update From Stackblitz
Pull current branch (from top left tackblitz github project)
if error "Push rejected because it was not a simple fast-forward. Use "force: true" to override"
--> refresh F5 Stackblitz

# Change from stackblitz
Commit - if error --> refresh F5 Stackblitz and commit again
# Update From local vscode
Source Control Git > ...> pull
