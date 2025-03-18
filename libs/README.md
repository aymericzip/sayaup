
## Repo URL:
- git@gitlab.com:sayaup/root-repo.git
- https://gitlab.com/sayaup/root-repo.git

## Submodule url: 

- apps/front
    - https://gitlab.com/sayaup/front.git
    - git@gitlab.com:sayaup/front.git

- libs/ui
    - https://gitlab.com/sayaup/ui.git
    - git@gitlab.com:sayaup/ui.git


## setup:

git submodule add git@gitlab.com:sayaup/front.git ./apps/

git submodule add git@gitlab.com:sayaup/ui.git ./libs/

git submodule update --init --recursive

pnpm install 

