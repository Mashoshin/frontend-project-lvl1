install:	
	 install-deps

start:
	npx babel-node src/bin/brain-progression.js
build:
	rm -rf dist
	npm run build 

install-deps:
	 npm install

publish:
	npm publish --dry -run
lint:
	npx eslint . 
