// Constructor
// ramMemory - number (should be the same as the received ramMemory)
// cpuGHz - number (should be the same as the received cpuGHz)
// hddMemory - number (should be the same as the received hddMemory)
// taskManager – empty array
// installedPrograms - empty array
class Program {
    constructor(name, requiredSpace) {
        this.name = name;
        this.requiredSpace = requiredSpace;
    }
}

// When ram and cpu usages is calculated, create a new object with:
// name (name of the program)
// ramUsage (current ram usage that the program uses in %)
// cpuUsage (current cpu usage that the program uses in %).
// The properties must be exactly as they are mentioned! Also, you don’t have to round the numbers!
class ProgramResources {
    constructor(name, ramUsage, cpuUsage) {
        this.name = name;
        this.ramUsage = ramUsage;
        this.cpuUsage = cpuUsage;
    }
}

class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }


    // installAProgram({name}, {requiredSpace})
    // install a new program on the computer and save it in the installedPrograms property.
    // If the total hddMemory is exceeded while trying to install a new program,  new error should be thrown with the following message:
    // "There is not enough space on the hard drive"
    // If there is available space to install the given program, a new object with the given name and requiredSpace should be created 
    //and stored to the installedPrograms array property.
    // Keep in mind that when you successfully install a program you must decrease the total hdd memory on the computer with the capacity for the currently installed program!
    // The following function should return the newly created object.
    installAProgram(name, requiredSpace) {
        if (requiredSpace > this.hddMemory) {
            throw new Error('"There is not enough space on the hard drive"');
        } else {
            const program = new Program(name, requiredSpace);
            this.installedPrograms.push(program);
            this.hddMemory -= requiredSpace;
            console.log(program)
            return program;
        }
    }


    // uninstallAProgram({name})
    // This function should uninstall an already installed program on the computer (remove the first program with the given name from the installedPrograms property).
    // If there are no installed programs with the given name, a new error should be thrown with the following message:
    // "Control panel is not responding"

    // If installedPrograms property contains an object with the given name, that object should be removed from the array.
    // Also logically reversed move is to increase the total hdd memory with the capacity of the currently uninstalled program!
    // This function should return the installedPrograms array where the given program name is excluded.
    uninstallAProgram(name) {
        for (var i = 0; i < this.installedPrograms.length; i++) {
            if (this.installedPrograms[i].name === name) {
                this.hddMemory += this.installedPrograms[i].requiredSpace;
                this.installedPrograms.splice(i, 1);
                return this.installedPrograms;
            } else {
                throw new Error("Control panel is not responding");
            }
        }
    }

    //     openAProgram({name})
    // This function should open an already installed program on the computer.
    // Receives a string (name of that program)
    // If the given name is not present in the installedPrograms property, a new error should be thrown with the following message:
    // "The ${name} is not recognized"
    // To open an installed program, you must calculate how much RAM memory and CPU usage the program will need.
    // To find out how much:
    // ram memory the current program will need, use the following formula:
    // (programRequiredSpace / totalRamMemory) * 1.5

    // cpu usage the current program will need, use the following formula:
    // ( ( programRequiredSpace / CPU GHz ) / 500) * 1.5

    // Keep in mind the both formulas calculate a numbers in percent (%) for the current ram and cpu usage.
    // If the total ram usage reaches or exceeds 100% (the ram usage for all opened programs), the function should throw a new error with the following message:
    // "{programName} caused out of memory exception"
    // If the total cpu usage reaches or exceeds 100% (the cpu usage for all opened programs), the function should throw a new error with the following message:
    // "{programName} caused out of cpu exception"
    // If both (ram usage and cpu usage) reaches or exceeds 100% return the ram memory exception case.
    // When the object is created, push it in the taskManager array property. 
    // The function must return the newly created object.

    // If the given name is an installed program and it is already open, a new error should be thrown with the following message:
    // The ${name} is already open"

    openAProgram(name) {
        for (var i = 0; i < this.installedPrograms.length; i++) {

            if (this.installedPrograms[i].name === name) {
                for (let j = 0; j < this.taskManager.length; j++) {
                    if (this.taskManager[j].name === name) throw new Error(`The ${name} is already open`)
                }

                const programRam = (this.installedPrograms[i].requiredSpace / this.ramMemory) * 1.5;
                const programCpu = (this.installedPrograms[i].requiredSpace / this.cpuGHz) * 1.5;
                this.ramMemory -= programRam;
                this.cpuGHz -= programCpu;

                if (this.ramMemory <= 0) {
                    throw new Error(`${name} caused out of memory exception`);
                } else if (this.cpuGHz <= 0) {
                    throw new Error(`${name} caused out of cpu exception`);
                } else if (this.ramMemory <= 0 && this.cpuGHz <= 0) {
                    throw new Error(`${name} caused out of memory exception`);
                }
                const programInfo = new ProgramResources(name, programRam, programCpu)
                this.taskManager.push(programInfo);

                return programInfo;
            } else {
                throw new Error(`"The ${name} is not recognized"`);
            }
        }

    }



}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.uninstallAProgram('Word');
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Excel');
// computer.openAProgram('Solitare');

console.log(computer.installedPrograms);
console.log(('-').repeat(50)) // Separator
console.log(computer.taskManager);