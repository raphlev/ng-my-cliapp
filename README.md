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

# Build on local vscode

npm install
Add angular.json manually from another existing project (replace project name, check if resources files exist)
update tsconfig.app.json to solve compilation error:
    update
        "files": [
            src/"main.ts",
            src/"polyfills.ts"
        ]
    into
        "files": [
            "main.ts",
            "polyfills.ts"
        ]

# Fix https://github.com/angular/angular-cli/issues/15878
"Machine-In-The-Middle" Vulnerability Caused by https-proxy-agent Dependency #15878
npm i --save-dev npm-force-resolutions
Add this to your package.json
    "resolutions": {
        "https-proxy-agent": "^3.0.0"
    }
Let npm-force-resolutions do it's thing
- rm -r node_modules
- npx npm-force-resolutions
- npm install
- re-run your audit npm audit.

# Fix ERROR in The Angular Compiler requires TypeScript >=3.4.0 and <3.6.0 but 3.6.4 was found instead
Check in npm the previous version available
In package.json,
    replace
        "devDependencies": {
            ..
            "typescript": "^3.6.4"
        }
    into
            "devDependencies": {
            ..
            "typescript": "~3.5.1"
        }
