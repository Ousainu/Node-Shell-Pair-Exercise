module.exports = function() {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();
        process.stdout.write('You typed: ' + cmd + '\n');
        process.stdout.write(fs.readdir('./', 'utf8', (err, files) => {
            if (err) {
                throw err 
            } else {
                process.stdout.write(files.join('\n'))
                process.stdout.write("prompt > ");
            }
        }));
        process.stdout.write('\nprompt > ');
    })
};