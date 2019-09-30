install:	
	 install-deps

start:
	npx babel-node src/bin/brain-games.js
 

install-deps:
	 npm install

publish:
	npm publish --dry -run
lint:
	npx eslint . 
