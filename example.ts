// Partial<T>. Создает тип со всеми свойствами T установленными в необязательные.

interface IUser {
    name: string;
    surname: string;
    age: number;
}

const user1: Partial<IUser> = {
    name: 'Ivan',
    age: 30,
}

const user2: Partial<IUser> = {
    name: 'Sergei',
    surname: 'Portsev',
    // profession: 'developer', //error, не можем добавить сторонние элементы.
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Readonly<T>. Создает тип со всеми свойствами T только для чтения.

interface IArticle {
    title: string;
    description: string;
    tags: string[],
}

const todo: Readonly<IArticle> = {
    title: 'laptop',
    description: 'lorem ipsum',
    tags: ['technic', 'ultrabooks'],
}

todo.title = 'phone'; //error
todo.tags = []; //error
todo.tags[1] = '2020' // а так норм, ссылка на массив неизменна

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Record<K, T>. Создает тип с набором свойств K типа T. Эта утилита может быть использована для сопоставления свойств типа другому типу.

interface PageInfo {
    title: string;
    subtitle: string;
}

type Page = 'home' | 'about' | 'contact';

const page: Record<Page, Partial<PageInfo>> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home', subtitle: 'subtitile' },
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Pick<T,K>. Создает тип, выбирая набор свойств K из T.

interface IProduct {
    id: string;
    name: string;
    isAvailable: boolean;
}

type IProductForList = Pick<IProduct, 'id' | 'name'>;

const product: IProductForList = {
    id: 'dsgdsgdgsdgnsjg289358702d',
    name: 'ONE_TIME TEST PRODUCT',
    isAvailable: true, // error
}

const product2: IProduct = {
    id: 'asngkjsdbgiudbg4283dsdfsdff',
    name: 'ONE_TIME TEST PRODUCT 2',
    isAvailable: true,
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Omit<T,K>. Создает тип, выбирая все свойства T и удаляя из них K.

interface IProductCard {
    id: string;
    name: string;
    isAvailable: boolean;
}

type IProductCardPreview = Omit<IProduct, 'isAvailable'>;

const productCardPreview: IProductCardPreview = {
    id: 'dsfhgbihbi7474pbfg783203',
    name: 'Product 1',
    isAvailable: false, // error
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Required<T>. Создает тип, состоящий из всех свойств T заданных как обязательные.

interface IProps {
    a?: number;
    b?: number;
}

const props: IProps = {
    a: 1,
};

type IRequiredProps = Required<IProps>;

const requiredProps: IRequiredProps = {
    a: 2,
    b: 3,
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// ReturnType<T>. Создать тип возвращаемого значения из функции.

type T0 = ReturnType<() => string>;  // string
type T1 = ReturnType<(s: string) => void>;  // void