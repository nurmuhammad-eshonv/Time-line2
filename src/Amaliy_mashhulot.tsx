// 1. Funksiyalar

// Masala: Maxsulotni hisoblash
type Product = {
    name: string;
    price: number;
  };
  
  function calculateTotal(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  function greet(name: string, message: string = 'Hello'): string {
    return `${message}, ${name}!`;
  }
  
  // 2. Generics
  
  // Masala: Generics Bilan List Komponenti
  import React from 'react';
  
  type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
  };
  
  function List<T>({ items, renderItem }: ListProps<T>): JSX.Element {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
    );
  }
  
  // Masala: Generics Bilan Funksiya
  function findMax<T>(items: T[], compare: (a: T, b: T) => number): T | undefined {
    if (items.length === 0) return undefined;
  
    return items.reduce<T>((max, item) => {
      if (max === undefined) {
        return item; // Birinchi elementni boshlang'ich qiymat sifatida qabul qilamiz
      }
      return compare(item, max) > 0 ? item : max;
    }, items[0]); // Initial value sifatida birinchi elementni beramiz
  }
  
  
  // 3. Promise
  
  // Masala: Promise Bilan Ma'lumot Olish
  function fetchData(url: string): Promise<any> {
    return fetch(url).then(response => response.json());
  }
  
  // Masala: Promise Bilan Error Handling
  function fetchDataWithErrorHandling(url: string): Promise<any> {
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error);
        throw error; // Errorni yana tashlaydi
      });
  }
  
  // 4. Async/Await
  
  // Masala: Async/Await Bilan Ma'lumot Olish
  async function fetchDataAsync(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  // Masala: Async/Await Bilan Xatolikni Qo‘lga Kiritish
  async function fetchDataAsyncWithErrorHandling(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Caught Error:', error);
      throw error;
    }
  }
  
  // 5. Turlarni Tekshirish
  
  // Masala: Turlarni Tekshirish
  function isString(value: any): boolean {
    return typeof value === 'string';
  }
  
  function isNumber(value: any): boolean {
    return typeof value === 'number';
  }
  
  // Masala: Turlarni Tekshirish va Qabul Qilish
  function processValue(value: any): string {
    if (typeof value === 'string') {
      return `String value: ${value}`;
    } else if (typeof value === 'number') {
      return `Number value: ${value}`;
    } else {
      return 'Unknown value type';
    }
  }
  
  // Misol: Funksiyalar
  const products: Product[] = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
  ];
  
  console.log(calculateTotal(products)); // 300
  console.log(greet('Alice')); // Hello, Alice!
  console.log(greet('Alice', 'Hi')); // Hi, Alice!
  
  // Misol: Generics
  const numbers = [1, 2, 3, 4];
  const maxNumber = findMax(numbers, (a, b) => a - b);
  console.log(maxNumber); // 5
  
  // Misol: Promise
  fetchData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Caught Error:', error));
  
  // Misol: Async/Await
  fetchDataAsync('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Caught Error:', error));
  
  // Misol: Turlarni Tekshirish
  console.log(isString('Hello')); // true
  console.log(isNumber(123)); // true
  console.log(processValue('Hello')); // String value: Hello
  console.log(processValue(123)); // Number value: 123
  console.log(processValue(true)); // Unknown value type
  