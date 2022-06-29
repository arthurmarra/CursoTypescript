/* 01 */

interface Pessoa {
    name: string;
    profession: string;
    age: number;
    subjects: string[];
}

/* 02 */

const eu: Pessoa = {
    name: "Arthur",
    profession: "Estudante",
    age: 29,
    subjects: ["Programação", "Ciência da Computação", "Animes"]
}

/* 03 + 04 */

function personToInsterests(pessoa: Pessoa): string[]{
    return pessoa.subjects
}

/* 05 */

enum AssuntoCurso {
    Angular = "Angular",
    Typescript = "TypeScript",
    Git = "Git"
}

/* 06 */

interface Professor {
    name: string;
    courseSubject: AssuntoCurso[];
}

/* 07 */

const alan: Professor = {
    name: "Alan",
    courseSubject: [AssuntoCurso.Angular, AssuntoCurso.Git, AssuntoCurso.Typescript]
}

const nathan: Professor = {
    name: "Nathan",
    courseSubject: [AssuntoCurso.Angular, AssuntoCurso.Git]
}

/* 08 */

const professors: Professor[] = [
    alan,
    nathan
]

/* 09 */
const professortoName = (professor: Professor) => professor.name

function professorsToProfessorNames(professor: Professor[]): string[]{
    return professor.map(professortoName)
}

console.log(professorsToProfessorNames(professors))

/* 10 */

function professorsToCourseSubjects(professor: Professor[]): AssuntoCurso[]{
    const courseSubjectWithDuplications = professor.map(p => p.courseSubject)
    .reduce<AssuntoCurso[]>((accumulator, courseSubject) =>{
        return accumulator.concat(courseSubject)
    },[])

    const courseSubjectWithoutDuplicationsSet = new Set(courseSubjectWithDuplications)
    return Array.from(courseSubjectWithoutDuplicationsSet)
}

/* 11 */

function findProfessorThatTeachesTypescript(professors: Professor[]): Professor | undefined {
    return professors.find(professor => professor.courseSubject.includes(AssuntoCurso.Typescript))
}