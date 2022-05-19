// Generic Functions
function reverse<T>(list: T[]): T[] {
    const reversedList: T[] = [];

    for (let i = (list.length - 1); i >= 0; i--) {
        reversedList.push(<T>list[i]);
    }

    return reversedList;
}

const letters = ['a', 'b', 'c', 'd'];
console.log(reverse<string>(letters));

const numbers = [1, 2, 3, 4];
console.log(reverse<number>(numbers));


// Generic Interfaces
class CustomerId {
    constructor(private customerIdValue: number) {        
    }

    get value(): number {
        return this.customerIdValue;
    }
}

class Customer {
    constructor(public id: CustomerId, public name: string) {        
    }
}

interface Repository<T, TId> {
    getById(id: TId): T;
    persist(model: T): TId;
}

class CustomerRepository implements Repository<Customer, CustomerId> {
    constructor(private customers: Customer[]) {        
    }

    getById(id: CustomerId): Customer {
        return <Customer>this.customers[id.value];
    }

    persist(customer: Customer): CustomerId {
        this.customers[customer.id.value] = customer;
        return customer.id;
    }
}


// Generic Classes
class DomainId<T> {
    constructor(private id: T) {        
    }

    get value(): T {
        return this.id;
    }
}

class OrderId extends DomainId<number> {
    constructor(orderIdValue: number) {
        super(orderIdValue);
    }    
}

class AccountId extends DomainId<string> {
    constructor(accountIdValue: string) {
        super(accountIdValue);
    }
}

// Examples of compatibility
function onlyAcceptsOrderId(orderId: OrderId) {
    // ...
}

function acceptsAnyDomainId(id: DomainId<any>) {
    // ...
}

const accountId = new AccountId('GUID-1');
const orderId = new OrderId(5);

// Error: Argument of type 'AccountId' is not assignable to parameter of type 'OrderId'
//onlyAcceptsOrderId(accountId);
// OK
onlyAcceptsOrderId(orderId);
// OK
acceptsAnyDomainId(accountId);

// Type Constraints
interface HasName {
    name: string;
}

class Personalization {
    static greet<T extends HasName>(obj: T): string {
        return `Hello ${obj.name}`;
    }
}