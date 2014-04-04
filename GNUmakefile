.DEFAULT_GOAL := build

BIN = ./node_modules/.bin

deps::
	npm i
	$(BIN)/bower i

release-www::
	git co gh-pages
	YENV=production $(BIN)/enb make -n
	git add ./
	git ci -m 'release'
	git push
	git co master

clean::
	$(BIN)/enb make clean

build::
	$(BIN)/enb make

server::
	$(BIN)/enb server

.PHONY: deps release-www clean build server
