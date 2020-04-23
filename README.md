# CS372_project_3

## Table of Content 
- [Deploying to AWS](#Deploy)
    - [Docker](#Docker)
    - [Setting env vars](#Env)
    - [Deploying](#Deploying)
## Deploy 
To deploy to AWS, this project uses Terraform. The simplest way to deploy is to use the Dockerfile provided. 

### Docker
To start docker run the following command in the projects root dir: 
```
make image
```
then run:
```
CS372_ROOTDIR=$HOME/path_to_dir_where_CS372_project_3_lives make container-shell
```
### Env
To set the environmental variables:
```
source env.sh aws_profile_name deploy_name
``` 

### Deploying 
Finally run the command:
```
make project
```
