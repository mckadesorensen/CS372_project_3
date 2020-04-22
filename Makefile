SELF_DIR := $(dir $(realpath $(firstword $(MAKEFILE_LIST))))
DIST_DIR := ${SELF_DIR}/dist

.ONESHELL:

.PHONY: container-shell

image: build/project.Dockerfile
	cd build && \
	docker build -f project.Dockerfile -t cs372dockerdev .


container-shell:
	docker run -it --rm \
	-v ${CS372_ROOTDIR}/CS372_project_3:/CS372_project_3 \
	-v ~/.aws:/root/.aws \
	--name=cs372-dev \
	--workdir="/CS372_project_3" \
	cs372dockerdev:latest