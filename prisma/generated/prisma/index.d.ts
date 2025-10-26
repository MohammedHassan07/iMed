
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model medicine
 * 
 */
export type medicine = $Result.DefaultSelection<Prisma.$medicinePayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model PurchaseItem
 * 
 */
export type PurchaseItem = $Result.DefaultSelection<Prisma.$PurchaseItemPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Tax
 * 
 */
export type Tax = $Result.DefaultSelection<Prisma.$TaxPayload>
/**
 * Model Sales
 * 
 */
export type Sales = $Result.DefaultSelection<Prisma.$SalesPayload>
/**
 * Model SalesItem
 * 
 */
export type SalesItem = $Result.DefaultSelection<Prisma.$SalesItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Medicines
 * const medicines = await prisma.medicine.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Medicines
   * const medicines = await prisma.medicine.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.medicine`: Exposes CRUD operations for the **medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.medicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseItem`: Exposes CRUD operations for the **PurchaseItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseItems
    * const purchaseItems = await prisma.purchaseItem.findMany()
    * ```
    */
  get purchaseItem(): Prisma.PurchaseItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tax`: Exposes CRUD operations for the **Tax** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taxes
    * const taxes = await prisma.tax.findMany()
    * ```
    */
  get tax(): Prisma.TaxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **Sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.SalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesItem`: Exposes CRUD operations for the **SalesItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesItems
    * const salesItems = await prisma.salesItem.findMany()
    * ```
    */
  get salesItem(): Prisma.SalesItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    medicine: 'medicine',
    Purchase: 'Purchase',
    PurchaseItem: 'PurchaseItem',
    Supplier: 'Supplier',
    Tax: 'Tax',
    Sales: 'Sales',
    SalesItem: 'SalesItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "medicine" | "purchase" | "purchaseItem" | "supplier" | "tax" | "sales" | "salesItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      medicine: {
        payload: Prisma.$medicinePayload<ExtArgs>
        fields: Prisma.medicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.medicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.medicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload>
          }
          findFirst: {
            args: Prisma.medicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.medicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload>
          }
          findMany: {
            args: Prisma.medicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload>[]
          }
          create: {
            args: Prisma.medicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload>
          }
          createMany: {
            args: Prisma.medicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.medicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload>[]
          }
          delete: {
            args: Prisma.medicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload>
          }
          update: {
            args: Prisma.medicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload>
          }
          deleteMany: {
            args: Prisma.medicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.medicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.medicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload>[]
          }
          upsert: {
            args: Prisma.medicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.medicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.medicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      PurchaseItem: {
        payload: Prisma.$PurchaseItemPayload<ExtArgs>
        fields: Prisma.PurchaseItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          findFirst: {
            args: Prisma.PurchaseItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          findMany: {
            args: Prisma.PurchaseItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>[]
          }
          create: {
            args: Prisma.PurchaseItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          createMany: {
            args: Prisma.PurchaseItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>[]
          }
          delete: {
            args: Prisma.PurchaseItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          update: {
            args: Prisma.PurchaseItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          aggregate: {
            args: Prisma.PurchaseItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseItem>
          }
          groupBy: {
            args: Prisma.PurchaseItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseItemCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseItemCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Tax: {
        payload: Prisma.$TaxPayload<ExtArgs>
        fields: Prisma.TaxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          findFirst: {
            args: Prisma.TaxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          findMany: {
            args: Prisma.TaxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>[]
          }
          create: {
            args: Prisma.TaxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          createMany: {
            args: Prisma.TaxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>[]
          }
          delete: {
            args: Prisma.TaxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          update: {
            args: Prisma.TaxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          deleteMany: {
            args: Prisma.TaxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>[]
          }
          upsert: {
            args: Prisma.TaxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaxPayload>
          }
          aggregate: {
            args: Prisma.TaxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTax>
          }
          groupBy: {
            args: Prisma.TaxGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaxGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaxCountArgs<ExtArgs>
            result: $Utils.Optional<TaxCountAggregateOutputType> | number
          }
        }
      }
      Sales: {
        payload: Prisma.$SalesPayload<ExtArgs>
        fields: Prisma.SalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findFirst: {
            args: Prisma.SalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findMany: {
            args: Prisma.SalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          create: {
            args: Prisma.SalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          createMany: {
            args: Prisma.SalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          delete: {
            args: Prisma.SalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          update: {
            args: Prisma.SalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          deleteMany: {
            args: Prisma.SalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          upsert: {
            args: Prisma.SalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.SalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      SalesItem: {
        payload: Prisma.$SalesItemPayload<ExtArgs>
        fields: Prisma.SalesItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload>
          }
          findFirst: {
            args: Prisma.SalesItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload>
          }
          findMany: {
            args: Prisma.SalesItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload>[]
          }
          create: {
            args: Prisma.SalesItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload>
          }
          createMany: {
            args: Prisma.SalesItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload>[]
          }
          delete: {
            args: Prisma.SalesItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload>
          }
          update: {
            args: Prisma.SalesItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload>
          }
          deleteMany: {
            args: Prisma.SalesItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload>[]
          }
          upsert: {
            args: Prisma.SalesItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesItemPayload>
          }
          aggregate: {
            args: Prisma.SalesItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesItem>
          }
          groupBy: {
            args: Prisma.SalesItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesItemCountArgs<ExtArgs>
            result: $Utils.Optional<SalesItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    medicine?: medicineOmit
    purchase?: PurchaseOmit
    purchaseItem?: PurchaseItemOmit
    supplier?: SupplierOmit
    tax?: TaxOmit
    sales?: SalesOmit
    salesItem?: SalesItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    purchaseItems: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseItems?: boolean | MedicineCountOutputTypeCountPurchaseItemsArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountPurchaseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
  }


  /**
   * Count Type PurchaseCountOutputType
   */

  export type PurchaseCountOutputType = {
    purchasedItems: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchasedItems?: boolean | PurchaseCountOutputTypeCountPurchasedItemsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     */
    select?: PurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountPurchasedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
  }


  /**
   * Count Type SalesCountOutputType
   */

  export type SalesCountOutputType = {
    items: number
  }

  export type SalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SalesCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCountOutputType
     */
    select?: SalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    id: number | null
    packageQuantity: number | null
    minQuantityAlert: number | null
    boxNumber: number | null
  }

  export type MedicineSumAggregateOutputType = {
    id: number | null
    packageQuantity: number | null
    minQuantityAlert: number | null
    boxNumber: number | null
  }

  export type MedicineMinAggregateOutputType = {
    id: number | null
    itemCode: string | null
    saltName: string | null
    brandName: string | null
    manufacturer: string | null
    packageQuantity: number | null
    productForm: string | null
    minQuantityAlert: number | null
    storageCondition: string | null
    boxNumber: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: number | null
    itemCode: string | null
    saltName: string | null
    brandName: string | null
    manufacturer: string | null
    packageQuantity: number | null
    productForm: string | null
    minQuantityAlert: number | null
    storageCondition: string | null
    boxNumber: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    itemCode: number
    saltName: number
    brandName: number
    manufacturer: number
    packageQuantity: number
    productForm: number
    minQuantityAlert: number
    storageCondition: number
    boxNumber: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    id?: true
    packageQuantity?: true
    minQuantityAlert?: true
    boxNumber?: true
  }

  export type MedicineSumAggregateInputType = {
    id?: true
    packageQuantity?: true
    minQuantityAlert?: true
    boxNumber?: true
  }

  export type MedicineMinAggregateInputType = {
    id?: true
    itemCode?: true
    saltName?: true
    brandName?: true
    manufacturer?: true
    packageQuantity?: true
    productForm?: true
    minQuantityAlert?: true
    storageCondition?: true
    boxNumber?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    itemCode?: true
    saltName?: true
    brandName?: true
    manufacturer?: true
    packageQuantity?: true
    productForm?: true
    minQuantityAlert?: true
    storageCondition?: true
    boxNumber?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    itemCode?: true
    saltName?: true
    brandName?: true
    manufacturer?: true
    packageQuantity?: true
    productForm?: true
    minQuantityAlert?: true
    storageCondition?: true
    boxNumber?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicine to aggregate.
     */
    where?: medicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicines to fetch.
     */
    orderBy?: medicineOrderByWithRelationInput | medicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: medicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type medicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicineWhereInput
    orderBy?: medicineOrderByWithAggregationInput | medicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: medicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: number
    itemCode: string
    saltName: string
    brandName: string
    manufacturer: string
    packageQuantity: number
    productForm: string
    minQuantityAlert: number
    storageCondition: string
    boxNumber: number | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends medicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type medicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemCode?: boolean
    saltName?: boolean
    brandName?: boolean
    manufacturer?: boolean
    packageQuantity?: boolean
    productForm?: boolean
    minQuantityAlert?: boolean
    storageCondition?: boolean
    boxNumber?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchaseItems?: boolean | medicine$purchaseItemsArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type medicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemCode?: boolean
    saltName?: boolean
    brandName?: boolean
    manufacturer?: boolean
    packageQuantity?: boolean
    productForm?: boolean
    minQuantityAlert?: boolean
    storageCondition?: boolean
    boxNumber?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type medicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemCode?: boolean
    saltName?: boolean
    brandName?: boolean
    manufacturer?: boolean
    packageQuantity?: boolean
    productForm?: boolean
    minQuantityAlert?: boolean
    storageCondition?: boolean
    boxNumber?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type medicineSelectScalar = {
    id?: boolean
    itemCode?: boolean
    saltName?: boolean
    brandName?: boolean
    manufacturer?: boolean
    packageQuantity?: boolean
    productForm?: boolean
    minQuantityAlert?: boolean
    storageCondition?: boolean
    boxNumber?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type medicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemCode" | "saltName" | "brandName" | "manufacturer" | "packageQuantity" | "productForm" | "minQuantityAlert" | "storageCondition" | "boxNumber" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["medicine"]>
  export type medicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseItems?: boolean | medicine$purchaseItemsArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type medicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type medicineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $medicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medicine"
    objects: {
      purchaseItems: Prisma.$PurchaseItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itemCode: string
      saltName: string
      brandName: string
      manufacturer: string
      packageQuantity: number
      productForm: string
      minQuantityAlert: number
      storageCondition: string
      boxNumber: number | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type medicineGetPayload<S extends boolean | null | undefined | medicineDefaultArgs> = $Result.GetResult<Prisma.$medicinePayload, S>

  type medicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<medicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface medicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medicine'], meta: { name: 'medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {medicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends medicineFindUniqueArgs>(args: SelectSubset<T, medicineFindUniqueArgs<ExtArgs>>): Prisma__medicineClient<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {medicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends medicineFindUniqueOrThrowArgs>(args: SelectSubset<T, medicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__medicineClient<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends medicineFindFirstArgs>(args?: SelectSubset<T, medicineFindFirstArgs<ExtArgs>>): Prisma__medicineClient<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends medicineFindFirstOrThrowArgs>(args?: SelectSubset<T, medicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__medicineClient<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends medicineFindManyArgs>(args?: SelectSubset<T, medicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicine.
     * @param {medicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends medicineCreateArgs>(args: SelectSubset<T, medicineCreateArgs<ExtArgs>>): Prisma__medicineClient<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicines.
     * @param {medicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends medicineCreateManyArgs>(args?: SelectSubset<T, medicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {medicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends medicineCreateManyAndReturnArgs>(args?: SelectSubset<T, medicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicine.
     * @param {medicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends medicineDeleteArgs>(args: SelectSubset<T, medicineDeleteArgs<ExtArgs>>): Prisma__medicineClient<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicine.
     * @param {medicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends medicineUpdateArgs>(args: SelectSubset<T, medicineUpdateArgs<ExtArgs>>): Prisma__medicineClient<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicines.
     * @param {medicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends medicineDeleteManyArgs>(args?: SelectSubset<T, medicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends medicineUpdateManyArgs>(args: SelectSubset<T, medicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {medicineUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends medicineUpdateManyAndReturnArgs>(args: SelectSubset<T, medicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicine.
     * @param {medicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends medicineUpsertArgs>(args: SelectSubset<T, medicineUpsertArgs<ExtArgs>>): Prisma__medicineClient<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends medicineCountArgs>(
      args?: Subset<T, medicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends medicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medicineGroupByArgs['orderBy'] }
        : { orderBy?: medicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, medicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medicine model
   */
  readonly fields: medicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchaseItems<T extends medicine$purchaseItemsArgs<ExtArgs> = {}>(args?: Subset<T, medicine$purchaseItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the medicine model
   */
  interface medicineFieldRefs {
    readonly id: FieldRef<"medicine", 'Int'>
    readonly itemCode: FieldRef<"medicine", 'String'>
    readonly saltName: FieldRef<"medicine", 'String'>
    readonly brandName: FieldRef<"medicine", 'String'>
    readonly manufacturer: FieldRef<"medicine", 'String'>
    readonly packageQuantity: FieldRef<"medicine", 'Int'>
    readonly productForm: FieldRef<"medicine", 'String'>
    readonly minQuantityAlert: FieldRef<"medicine", 'Int'>
    readonly storageCondition: FieldRef<"medicine", 'String'>
    readonly boxNumber: FieldRef<"medicine", 'Int'>
    readonly description: FieldRef<"medicine", 'String'>
    readonly createdAt: FieldRef<"medicine", 'DateTime'>
    readonly updatedAt: FieldRef<"medicine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * medicine findUnique
   */
  export type medicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicineInclude<ExtArgs> | null
    /**
     * Filter, which medicine to fetch.
     */
    where: medicineWhereUniqueInput
  }

  /**
   * medicine findUniqueOrThrow
   */
  export type medicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicineInclude<ExtArgs> | null
    /**
     * Filter, which medicine to fetch.
     */
    where: medicineWhereUniqueInput
  }

  /**
   * medicine findFirst
   */
  export type medicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicineInclude<ExtArgs> | null
    /**
     * Filter, which medicine to fetch.
     */
    where?: medicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicines to fetch.
     */
    orderBy?: medicineOrderByWithRelationInput | medicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicines.
     */
    cursor?: medicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * medicine findFirstOrThrow
   */
  export type medicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicineInclude<ExtArgs> | null
    /**
     * Filter, which medicine to fetch.
     */
    where?: medicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicines to fetch.
     */
    orderBy?: medicineOrderByWithRelationInput | medicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicines.
     */
    cursor?: medicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * medicine findMany
   */
  export type medicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicineInclude<ExtArgs> | null
    /**
     * Filter, which medicines to fetch.
     */
    where?: medicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicines to fetch.
     */
    orderBy?: medicineOrderByWithRelationInput | medicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medicines.
     */
    cursor?: medicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * medicine create
   */
  export type medicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicineInclude<ExtArgs> | null
    /**
     * The data needed to create a medicine.
     */
    data: XOR<medicineCreateInput, medicineUncheckedCreateInput>
  }

  /**
   * medicine createMany
   */
  export type medicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medicines.
     */
    data: medicineCreateManyInput | medicineCreateManyInput[]
  }

  /**
   * medicine createManyAndReturn
   */
  export type medicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * The data used to create many medicines.
     */
    data: medicineCreateManyInput | medicineCreateManyInput[]
  }

  /**
   * medicine update
   */
  export type medicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicineInclude<ExtArgs> | null
    /**
     * The data needed to update a medicine.
     */
    data: XOR<medicineUpdateInput, medicineUncheckedUpdateInput>
    /**
     * Choose, which medicine to update.
     */
    where: medicineWhereUniqueInput
  }

  /**
   * medicine updateMany
   */
  export type medicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medicines.
     */
    data: XOR<medicineUpdateManyMutationInput, medicineUncheckedUpdateManyInput>
    /**
     * Filter which medicines to update
     */
    where?: medicineWhereInput
    /**
     * Limit how many medicines to update.
     */
    limit?: number
  }

  /**
   * medicine updateManyAndReturn
   */
  export type medicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * The data used to update medicines.
     */
    data: XOR<medicineUpdateManyMutationInput, medicineUncheckedUpdateManyInput>
    /**
     * Filter which medicines to update
     */
    where?: medicineWhereInput
    /**
     * Limit how many medicines to update.
     */
    limit?: number
  }

  /**
   * medicine upsert
   */
  export type medicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicineInclude<ExtArgs> | null
    /**
     * The filter to search for the medicine to update in case it exists.
     */
    where: medicineWhereUniqueInput
    /**
     * In case the medicine found by the `where` argument doesn't exist, create a new medicine with this data.
     */
    create: XOR<medicineCreateInput, medicineUncheckedCreateInput>
    /**
     * In case the medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medicineUpdateInput, medicineUncheckedUpdateInput>
  }

  /**
   * medicine delete
   */
  export type medicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicineInclude<ExtArgs> | null
    /**
     * Filter which medicine to delete.
     */
    where: medicineWhereUniqueInput
  }

  /**
   * medicine deleteMany
   */
  export type medicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicines to delete
     */
    where?: medicineWhereInput
    /**
     * Limit how many medicines to delete.
     */
    limit?: number
  }

  /**
   * medicine.purchaseItems
   */
  export type medicine$purchaseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    cursor?: PurchaseItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * medicine without action
   */
  export type medicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicine
     */
    select?: medicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the medicine
     */
    omit?: medicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicineInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id: number | null
    supplierId: number | null
    discount: number | null
    subTotal: number | null
    netTotal: number | null
    tax: number | null
    total: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
    supplierId: number | null
    discount: number | null
    subTotal: number | null
    netTotal: number | null
    tax: number | null
    total: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    supplierId: number | null
    purchaseDate: Date | null
    purchaseNumber: string | null
    notes: string | null
    discountType: string | null
    discount: number | null
    subTotal: number | null
    netTotal: number | null
    tax: number | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    supplierId: number | null
    purchaseDate: Date | null
    purchaseNumber: string | null
    notes: string | null
    discountType: string | null
    discount: number | null
    subTotal: number | null
    netTotal: number | null
    tax: number | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    supplierId: number
    purchaseDate: number
    purchaseNumber: number
    notes: number
    discountType: number
    discount: number
    subTotal: number
    netTotal: number
    tax: number
    total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
    supplierId?: true
    discount?: true
    subTotal?: true
    netTotal?: true
    tax?: true
    total?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
    supplierId?: true
    discount?: true
    subTotal?: true
    netTotal?: true
    tax?: true
    total?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    supplierId?: true
    purchaseDate?: true
    purchaseNumber?: true
    notes?: true
    discountType?: true
    discount?: true
    subTotal?: true
    netTotal?: true
    tax?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    supplierId?: true
    purchaseDate?: true
    purchaseNumber?: true
    notes?: true
    discountType?: true
    discount?: true
    subTotal?: true
    netTotal?: true
    tax?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    supplierId?: true
    purchaseDate?: true
    purchaseNumber?: true
    notes?: true
    discountType?: true
    discount?: true
    subTotal?: true
    netTotal?: true
    tax?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: number
    supplierId: number
    purchaseDate: Date
    purchaseNumber: string
    notes: string | null
    discountType: string
    discount: number
    subTotal: number
    netTotal: number
    tax: number
    total: number
    createdAt: Date
    updatedAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    purchaseDate?: boolean
    purchaseNumber?: boolean
    notes?: boolean
    discountType?: boolean
    discount?: boolean
    subTotal?: boolean
    netTotal?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchasedItems?: boolean | Purchase$purchasedItemsArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    purchaseDate?: boolean
    purchaseNumber?: boolean
    notes?: boolean
    discountType?: boolean
    discount?: boolean
    subTotal?: boolean
    netTotal?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    purchaseDate?: boolean
    purchaseNumber?: boolean
    notes?: boolean
    discountType?: boolean
    discount?: boolean
    subTotal?: boolean
    netTotal?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    supplierId?: boolean
    purchaseDate?: boolean
    purchaseNumber?: boolean
    notes?: boolean
    discountType?: boolean
    discount?: boolean
    subTotal?: boolean
    netTotal?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "purchaseDate" | "purchaseNumber" | "notes" | "discountType" | "discount" | "subTotal" | "netTotal" | "tax" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchasedItems?: boolean | Purchase$purchasedItemsArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      purchasedItems: Prisma.$PurchaseItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supplierId: number
      purchaseDate: Date
      purchaseNumber: string
      notes: string | null
      discountType: string
      discount: number
      subTotal: number
      netTotal: number
      tax: number
      total: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchasedItems<T extends Purchase$purchasedItemsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$purchasedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'Int'>
    readonly supplierId: FieldRef<"Purchase", 'Int'>
    readonly purchaseDate: FieldRef<"Purchase", 'DateTime'>
    readonly purchaseNumber: FieldRef<"Purchase", 'String'>
    readonly notes: FieldRef<"Purchase", 'String'>
    readonly discountType: FieldRef<"Purchase", 'String'>
    readonly discount: FieldRef<"Purchase", 'Float'>
    readonly subTotal: FieldRef<"Purchase", 'Float'>
    readonly netTotal: FieldRef<"Purchase", 'Float'>
    readonly tax: FieldRef<"Purchase", 'Float'>
    readonly total: FieldRef<"Purchase", 'Float'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
    readonly updatedAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase.purchasedItems
   */
  export type Purchase$purchasedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    cursor?: PurchaseItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseItem
   */

  export type AggregatePurchaseItem = {
    _count: PurchaseItemCountAggregateOutputType | null
    _avg: PurchaseItemAvgAggregateOutputType | null
    _sum: PurchaseItemSumAggregateOutputType | null
    _min: PurchaseItemMinAggregateOutputType | null
    _max: PurchaseItemMaxAggregateOutputType | null
  }

  export type PurchaseItemAvgAggregateOutputType = {
    id: number | null
    purchaseId: number | null
    medicineId: number | null
    purchasePrice: number | null
    sellingPrice: number | null
    sellingPricePerMedicine: number | null
    quantity: number | null
    packageQuantity: number | null
    profit: number | null
    tax: number | null
    total: number | null
    totalMedicines: number | null
    remainingMedicines: number | null
    scheme: number | null
  }

  export type PurchaseItemSumAggregateOutputType = {
    id: number | null
    purchaseId: number | null
    medicineId: number | null
    purchasePrice: number | null
    sellingPrice: number | null
    sellingPricePerMedicine: number | null
    quantity: number | null
    packageQuantity: number | null
    profit: number | null
    tax: number | null
    total: number | null
    totalMedicines: number | null
    remainingMedicines: number | null
    scheme: number | null
  }

  export type PurchaseItemMinAggregateOutputType = {
    id: number | null
    purchaseId: number | null
    medicineId: number | null
    batchNumber: string | null
    expiryDate: Date | null
    purchasePrice: number | null
    sellingPrice: number | null
    sellingPricePerMedicine: number | null
    quantity: number | null
    packageQuantity: number | null
    profit: number | null
    tax: number | null
    total: number | null
    totalMedicines: number | null
    remainingMedicines: number | null
    scheme: number | null
    isSold: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseItemMaxAggregateOutputType = {
    id: number | null
    purchaseId: number | null
    medicineId: number | null
    batchNumber: string | null
    expiryDate: Date | null
    purchasePrice: number | null
    sellingPrice: number | null
    sellingPricePerMedicine: number | null
    quantity: number | null
    packageQuantity: number | null
    profit: number | null
    tax: number | null
    total: number | null
    totalMedicines: number | null
    remainingMedicines: number | null
    scheme: number | null
    isSold: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseItemCountAggregateOutputType = {
    id: number
    purchaseId: number
    medicineId: number
    batchNumber: number
    expiryDate: number
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseItemAvgAggregateInputType = {
    id?: true
    purchaseId?: true
    medicineId?: true
    purchasePrice?: true
    sellingPrice?: true
    sellingPricePerMedicine?: true
    quantity?: true
    packageQuantity?: true
    profit?: true
    tax?: true
    total?: true
    totalMedicines?: true
    remainingMedicines?: true
    scheme?: true
  }

  export type PurchaseItemSumAggregateInputType = {
    id?: true
    purchaseId?: true
    medicineId?: true
    purchasePrice?: true
    sellingPrice?: true
    sellingPricePerMedicine?: true
    quantity?: true
    packageQuantity?: true
    profit?: true
    tax?: true
    total?: true
    totalMedicines?: true
    remainingMedicines?: true
    scheme?: true
  }

  export type PurchaseItemMinAggregateInputType = {
    id?: true
    purchaseId?: true
    medicineId?: true
    batchNumber?: true
    expiryDate?: true
    purchasePrice?: true
    sellingPrice?: true
    sellingPricePerMedicine?: true
    quantity?: true
    packageQuantity?: true
    profit?: true
    tax?: true
    total?: true
    totalMedicines?: true
    remainingMedicines?: true
    scheme?: true
    isSold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseItemMaxAggregateInputType = {
    id?: true
    purchaseId?: true
    medicineId?: true
    batchNumber?: true
    expiryDate?: true
    purchasePrice?: true
    sellingPrice?: true
    sellingPricePerMedicine?: true
    quantity?: true
    packageQuantity?: true
    profit?: true
    tax?: true
    total?: true
    totalMedicines?: true
    remainingMedicines?: true
    scheme?: true
    isSold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseItemCountAggregateInputType = {
    id?: true
    purchaseId?: true
    medicineId?: true
    batchNumber?: true
    expiryDate?: true
    purchasePrice?: true
    sellingPrice?: true
    sellingPricePerMedicine?: true
    quantity?: true
    packageQuantity?: true
    profit?: true
    tax?: true
    total?: true
    totalMedicines?: true
    remainingMedicines?: true
    scheme?: true
    isSold?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseItem to aggregate.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseItems
    **/
    _count?: true | PurchaseItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseItemMaxAggregateInputType
  }

  export type GetPurchaseItemAggregateType<T extends PurchaseItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseItem[P]>
      : GetScalarType<T[P], AggregatePurchaseItem[P]>
  }




  export type PurchaseItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithAggregationInput | PurchaseItemOrderByWithAggregationInput[]
    by: PurchaseItemScalarFieldEnum[] | PurchaseItemScalarFieldEnum
    having?: PurchaseItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseItemCountAggregateInputType | true
    _avg?: PurchaseItemAvgAggregateInputType
    _sum?: PurchaseItemSumAggregateInputType
    _min?: PurchaseItemMinAggregateInputType
    _max?: PurchaseItemMaxAggregateInputType
  }

  export type PurchaseItemGroupByOutputType = {
    id: number
    purchaseId: number
    medicineId: number
    batchNumber: string
    expiryDate: Date
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold: boolean
    createdAt: Date
    updatedAt: Date
    _count: PurchaseItemCountAggregateOutputType | null
    _avg: PurchaseItemAvgAggregateOutputType | null
    _sum: PurchaseItemSumAggregateOutputType | null
    _min: PurchaseItemMinAggregateOutputType | null
    _max: PurchaseItemMaxAggregateOutputType | null
  }

  type GetPurchaseItemGroupByPayload<T extends PurchaseItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseItemGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseItemGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    medicineId?: boolean
    batchNumber?: boolean
    expiryDate?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    sellingPricePerMedicine?: boolean
    quantity?: boolean
    packageQuantity?: boolean
    profit?: boolean
    tax?: boolean
    total?: boolean
    totalMedicines?: boolean
    remainingMedicines?: boolean
    scheme?: boolean
    isSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    medicine?: boolean | medicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    medicineId?: boolean
    batchNumber?: boolean
    expiryDate?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    sellingPricePerMedicine?: boolean
    quantity?: boolean
    packageQuantity?: boolean
    profit?: boolean
    tax?: boolean
    total?: boolean
    totalMedicines?: boolean
    remainingMedicines?: boolean
    scheme?: boolean
    isSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    medicine?: boolean | medicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseId?: boolean
    medicineId?: boolean
    batchNumber?: boolean
    expiryDate?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    sellingPricePerMedicine?: boolean
    quantity?: boolean
    packageQuantity?: boolean
    profit?: boolean
    tax?: boolean
    total?: boolean
    totalMedicines?: boolean
    remainingMedicines?: boolean
    scheme?: boolean
    isSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    medicine?: boolean | medicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectScalar = {
    id?: boolean
    purchaseId?: boolean
    medicineId?: boolean
    batchNumber?: boolean
    expiryDate?: boolean
    purchasePrice?: boolean
    sellingPrice?: boolean
    sellingPricePerMedicine?: boolean
    quantity?: boolean
    packageQuantity?: boolean
    profit?: boolean
    tax?: boolean
    total?: boolean
    totalMedicines?: boolean
    remainingMedicines?: boolean
    scheme?: boolean
    isSold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchaseId" | "medicineId" | "batchNumber" | "expiryDate" | "purchasePrice" | "sellingPrice" | "sellingPricePerMedicine" | "quantity" | "packageQuantity" | "profit" | "tax" | "total" | "totalMedicines" | "remainingMedicines" | "scheme" | "isSold" | "createdAt" | "updatedAt", ExtArgs["result"]["purchaseItem"]>
  export type PurchaseItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    medicine?: boolean | medicineDefaultArgs<ExtArgs>
  }
  export type PurchaseItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    medicine?: boolean | medicineDefaultArgs<ExtArgs>
  }
  export type PurchaseItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
    medicine?: boolean | medicineDefaultArgs<ExtArgs>
  }

  export type $PurchaseItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseItem"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
      medicine: Prisma.$medicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      purchaseId: number
      medicineId: number
      batchNumber: string
      expiryDate: Date
      purchasePrice: number
      sellingPrice: number
      sellingPricePerMedicine: number
      quantity: number
      packageQuantity: number
      profit: number
      tax: number
      total: number
      totalMedicines: number
      remainingMedicines: number
      scheme: number
      isSold: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchaseItem"]>
    composites: {}
  }

  type PurchaseItemGetPayload<S extends boolean | null | undefined | PurchaseItemDefaultArgs> = $Result.GetResult<Prisma.$PurchaseItemPayload, S>

  type PurchaseItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseItemCountAggregateInputType | true
    }

  export interface PurchaseItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseItem'], meta: { name: 'PurchaseItem' } }
    /**
     * Find zero or one PurchaseItem that matches the filter.
     * @param {PurchaseItemFindUniqueArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseItemFindUniqueArgs>(args: SelectSubset<T, PurchaseItemFindUniqueArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseItemFindUniqueOrThrowArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindFirstArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseItemFindFirstArgs>(args?: SelectSubset<T, PurchaseItemFindFirstArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindFirstOrThrowArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseItems
     * const purchaseItems = await prisma.purchaseItem.findMany()
     * 
     * // Get first 10 PurchaseItems
     * const purchaseItems = await prisma.purchaseItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseItemWithIdOnly = await prisma.purchaseItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseItemFindManyArgs>(args?: SelectSubset<T, PurchaseItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseItem.
     * @param {PurchaseItemCreateArgs} args - Arguments to create a PurchaseItem.
     * @example
     * // Create one PurchaseItem
     * const PurchaseItem = await prisma.purchaseItem.create({
     *   data: {
     *     // ... data to create a PurchaseItem
     *   }
     * })
     * 
     */
    create<T extends PurchaseItemCreateArgs>(args: SelectSubset<T, PurchaseItemCreateArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseItems.
     * @param {PurchaseItemCreateManyArgs} args - Arguments to create many PurchaseItems.
     * @example
     * // Create many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseItemCreateManyArgs>(args?: SelectSubset<T, PurchaseItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseItems and returns the data saved in the database.
     * @param {PurchaseItemCreateManyAndReturnArgs} args - Arguments to create many PurchaseItems.
     * @example
     * // Create many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseItems and only return the `id`
     * const purchaseItemWithIdOnly = await prisma.purchaseItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseItem.
     * @param {PurchaseItemDeleteArgs} args - Arguments to delete one PurchaseItem.
     * @example
     * // Delete one PurchaseItem
     * const PurchaseItem = await prisma.purchaseItem.delete({
     *   where: {
     *     // ... filter to delete one PurchaseItem
     *   }
     * })
     * 
     */
    delete<T extends PurchaseItemDeleteArgs>(args: SelectSubset<T, PurchaseItemDeleteArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseItem.
     * @param {PurchaseItemUpdateArgs} args - Arguments to update one PurchaseItem.
     * @example
     * // Update one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseItemUpdateArgs>(args: SelectSubset<T, PurchaseItemUpdateArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseItems.
     * @param {PurchaseItemDeleteManyArgs} args - Arguments to filter PurchaseItems to delete.
     * @example
     * // Delete a few PurchaseItems
     * const { count } = await prisma.purchaseItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseItemDeleteManyArgs>(args?: SelectSubset<T, PurchaseItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseItemUpdateManyArgs>(args: SelectSubset<T, PurchaseItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseItems and returns the data updated in the database.
     * @param {PurchaseItemUpdateManyAndReturnArgs} args - Arguments to update many PurchaseItems.
     * @example
     * // Update many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseItems and only return the `id`
     * const purchaseItemWithIdOnly = await prisma.purchaseItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseItem.
     * @param {PurchaseItemUpsertArgs} args - Arguments to update or create a PurchaseItem.
     * @example
     * // Update or create a PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.upsert({
     *   create: {
     *     // ... data to create a PurchaseItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseItem we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseItemUpsertArgs>(args: SelectSubset<T, PurchaseItemUpsertArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemCountArgs} args - Arguments to filter PurchaseItems to count.
     * @example
     * // Count the number of PurchaseItems
     * const count = await prisma.purchaseItem.count({
     *   where: {
     *     // ... the filter for the PurchaseItems we want to count
     *   }
     * })
    **/
    count<T extends PurchaseItemCountArgs>(
      args?: Subset<T, PurchaseItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseItemAggregateArgs>(args: Subset<T, PurchaseItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseItemAggregateType<T>>

    /**
     * Group by PurchaseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseItemGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseItem model
   */
  readonly fields: PurchaseItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicine<T extends medicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, medicineDefaultArgs<ExtArgs>>): Prisma__medicineClient<$Result.GetResult<Prisma.$medicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseItem model
   */
  interface PurchaseItemFieldRefs {
    readonly id: FieldRef<"PurchaseItem", 'Int'>
    readonly purchaseId: FieldRef<"PurchaseItem", 'Int'>
    readonly medicineId: FieldRef<"PurchaseItem", 'Int'>
    readonly batchNumber: FieldRef<"PurchaseItem", 'String'>
    readonly expiryDate: FieldRef<"PurchaseItem", 'DateTime'>
    readonly purchasePrice: FieldRef<"PurchaseItem", 'Float'>
    readonly sellingPrice: FieldRef<"PurchaseItem", 'Float'>
    readonly sellingPricePerMedicine: FieldRef<"PurchaseItem", 'Float'>
    readonly quantity: FieldRef<"PurchaseItem", 'Int'>
    readonly packageQuantity: FieldRef<"PurchaseItem", 'Float'>
    readonly profit: FieldRef<"PurchaseItem", 'Float'>
    readonly tax: FieldRef<"PurchaseItem", 'Float'>
    readonly total: FieldRef<"PurchaseItem", 'Float'>
    readonly totalMedicines: FieldRef<"PurchaseItem", 'Float'>
    readonly remainingMedicines: FieldRef<"PurchaseItem", 'Float'>
    readonly scheme: FieldRef<"PurchaseItem", 'Float'>
    readonly isSold: FieldRef<"PurchaseItem", 'Boolean'>
    readonly createdAt: FieldRef<"PurchaseItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseItem findUnique
   */
  export type PurchaseItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem findUniqueOrThrow
   */
  export type PurchaseItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem findFirst
   */
  export type PurchaseItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseItems.
     */
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem findFirstOrThrow
   */
  export type PurchaseItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseItems.
     */
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem findMany
   */
  export type PurchaseItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItems to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem create
   */
  export type PurchaseItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseItem.
     */
    data: XOR<PurchaseItemCreateInput, PurchaseItemUncheckedCreateInput>
  }

  /**
   * PurchaseItem createMany
   */
  export type PurchaseItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseItems.
     */
    data: PurchaseItemCreateManyInput | PurchaseItemCreateManyInput[]
  }

  /**
   * PurchaseItem createManyAndReturn
   */
  export type PurchaseItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseItems.
     */
    data: PurchaseItemCreateManyInput | PurchaseItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseItem update
   */
  export type PurchaseItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseItem.
     */
    data: XOR<PurchaseItemUpdateInput, PurchaseItemUncheckedUpdateInput>
    /**
     * Choose, which PurchaseItem to update.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem updateMany
   */
  export type PurchaseItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseItems.
     */
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseItems to update
     */
    where?: PurchaseItemWhereInput
    /**
     * Limit how many PurchaseItems to update.
     */
    limit?: number
  }

  /**
   * PurchaseItem updateManyAndReturn
   */
  export type PurchaseItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseItems.
     */
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseItems to update
     */
    where?: PurchaseItemWhereInput
    /**
     * Limit how many PurchaseItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseItem upsert
   */
  export type PurchaseItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseItem to update in case it exists.
     */
    where: PurchaseItemWhereUniqueInput
    /**
     * In case the PurchaseItem found by the `where` argument doesn't exist, create a new PurchaseItem with this data.
     */
    create: XOR<PurchaseItemCreateInput, PurchaseItemUncheckedCreateInput>
    /**
     * In case the PurchaseItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseItemUpdateInput, PurchaseItemUncheckedUpdateInput>
  }

  /**
   * PurchaseItem delete
   */
  export type PurchaseItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter which PurchaseItem to delete.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem deleteMany
   */
  export type PurchaseItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseItems to delete
     */
    where?: PurchaseItemWhereInput
    /**
     * Limit how many PurchaseItems to delete.
     */
    limit?: number
  }

  /**
   * PurchaseItem without action
   */
  export type PurchaseItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseItem
     */
    omit?: PurchaseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    companyName: string | null
    contactPerson: string | null
    contact: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    companyName: string | null
    contactPerson: string | null
    contact: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    companyName: number
    contactPerson: number
    contact: number
    email: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    companyName?: true
    contactPerson?: true
    contact?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    companyName?: true
    contactPerson?: true
    contact?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    companyName?: true
    contactPerson?: true
    contact?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    companyName: string
    contactPerson: string
    contact: string
    email: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    contactPerson?: boolean
    contact?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    contactPerson?: boolean
    contact?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    contactPerson?: boolean
    contact?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    companyName?: boolean
    contactPerson?: boolean
    contact?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "contactPerson" | "contact" | "email" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyName: string
      contactPerson: string
      contact: string
      email: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly companyName: FieldRef<"Supplier", 'String'>
    readonly contactPerson: FieldRef<"Supplier", 'String'>
    readonly contact: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
  }


  /**
   * Model Tax
   */

  export type AggregateTax = {
    _count: TaxCountAggregateOutputType | null
    _avg: TaxAvgAggregateOutputType | null
    _sum: TaxSumAggregateOutputType | null
    _min: TaxMinAggregateOutputType | null
    _max: TaxMaxAggregateOutputType | null
  }

  export type TaxAvgAggregateOutputType = {
    id: number | null
  }

  export type TaxSumAggregateOutputType = {
    id: number | null
  }

  export type TaxMinAggregateOutputType = {
    id: number | null
    taxName: string | null
    percentage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxMaxAggregateOutputType = {
    id: number | null
    taxName: string | null
    percentage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaxCountAggregateOutputType = {
    id: number
    taxName: number
    percentage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaxAvgAggregateInputType = {
    id?: true
  }

  export type TaxSumAggregateInputType = {
    id?: true
  }

  export type TaxMinAggregateInputType = {
    id?: true
    taxName?: true
    percentage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxMaxAggregateInputType = {
    id?: true
    taxName?: true
    percentage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaxCountAggregateInputType = {
    id?: true
    taxName?: true
    percentage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tax to aggregate.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Taxes
    **/
    _count?: true | TaxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxMaxAggregateInputType
  }

  export type GetTaxAggregateType<T extends TaxAggregateArgs> = {
        [P in keyof T & keyof AggregateTax]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTax[P]>
      : GetScalarType<T[P], AggregateTax[P]>
  }




  export type TaxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaxWhereInput
    orderBy?: TaxOrderByWithAggregationInput | TaxOrderByWithAggregationInput[]
    by: TaxScalarFieldEnum[] | TaxScalarFieldEnum
    having?: TaxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxCountAggregateInputType | true
    _avg?: TaxAvgAggregateInputType
    _sum?: TaxSumAggregateInputType
    _min?: TaxMinAggregateInputType
    _max?: TaxMaxAggregateInputType
  }

  export type TaxGroupByOutputType = {
    id: number
    taxName: string
    percentage: string
    createdAt: Date
    updatedAt: Date
    _count: TaxCountAggregateOutputType | null
    _avg: TaxAvgAggregateOutputType | null
    _sum: TaxSumAggregateOutputType | null
    _min: TaxMinAggregateOutputType | null
    _max: TaxMaxAggregateOutputType | null
  }

  type GetTaxGroupByPayload<T extends TaxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxGroupByOutputType[P]>
            : GetScalarType<T[P], TaxGroupByOutputType[P]>
        }
      >
    >


  export type TaxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxName?: boolean
    percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tax"]>

  export type TaxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxName?: boolean
    percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tax"]>

  export type TaxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taxName?: boolean
    percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tax"]>

  export type TaxSelectScalar = {
    id?: boolean
    taxName?: boolean
    percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taxName" | "percentage" | "createdAt" | "updatedAt", ExtArgs["result"]["tax"]>

  export type $TaxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tax"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taxName: string
      percentage: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tax"]>
    composites: {}
  }

  type TaxGetPayload<S extends boolean | null | undefined | TaxDefaultArgs> = $Result.GetResult<Prisma.$TaxPayload, S>

  type TaxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaxCountAggregateInputType | true
    }

  export interface TaxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tax'], meta: { name: 'Tax' } }
    /**
     * Find zero or one Tax that matches the filter.
     * @param {TaxFindUniqueArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaxFindUniqueArgs>(args: SelectSubset<T, TaxFindUniqueArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tax that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaxFindUniqueOrThrowArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaxFindUniqueOrThrowArgs>(args: SelectSubset<T, TaxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tax that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindFirstArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaxFindFirstArgs>(args?: SelectSubset<T, TaxFindFirstArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tax that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindFirstOrThrowArgs} args - Arguments to find a Tax
     * @example
     * // Get one Tax
     * const tax = await prisma.tax.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaxFindFirstOrThrowArgs>(args?: SelectSubset<T, TaxFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Taxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taxes
     * const taxes = await prisma.tax.findMany()
     * 
     * // Get first 10 Taxes
     * const taxes = await prisma.tax.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxWithIdOnly = await prisma.tax.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaxFindManyArgs>(args?: SelectSubset<T, TaxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tax.
     * @param {TaxCreateArgs} args - Arguments to create a Tax.
     * @example
     * // Create one Tax
     * const Tax = await prisma.tax.create({
     *   data: {
     *     // ... data to create a Tax
     *   }
     * })
     * 
     */
    create<T extends TaxCreateArgs>(args: SelectSubset<T, TaxCreateArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Taxes.
     * @param {TaxCreateManyArgs} args - Arguments to create many Taxes.
     * @example
     * // Create many Taxes
     * const tax = await prisma.tax.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaxCreateManyArgs>(args?: SelectSubset<T, TaxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Taxes and returns the data saved in the database.
     * @param {TaxCreateManyAndReturnArgs} args - Arguments to create many Taxes.
     * @example
     * // Create many Taxes
     * const tax = await prisma.tax.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Taxes and only return the `id`
     * const taxWithIdOnly = await prisma.tax.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaxCreateManyAndReturnArgs>(args?: SelectSubset<T, TaxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tax.
     * @param {TaxDeleteArgs} args - Arguments to delete one Tax.
     * @example
     * // Delete one Tax
     * const Tax = await prisma.tax.delete({
     *   where: {
     *     // ... filter to delete one Tax
     *   }
     * })
     * 
     */
    delete<T extends TaxDeleteArgs>(args: SelectSubset<T, TaxDeleteArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tax.
     * @param {TaxUpdateArgs} args - Arguments to update one Tax.
     * @example
     * // Update one Tax
     * const tax = await prisma.tax.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaxUpdateArgs>(args: SelectSubset<T, TaxUpdateArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Taxes.
     * @param {TaxDeleteManyArgs} args - Arguments to filter Taxes to delete.
     * @example
     * // Delete a few Taxes
     * const { count } = await prisma.tax.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaxDeleteManyArgs>(args?: SelectSubset<T, TaxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taxes
     * const tax = await prisma.tax.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaxUpdateManyArgs>(args: SelectSubset<T, TaxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxes and returns the data updated in the database.
     * @param {TaxUpdateManyAndReturnArgs} args - Arguments to update many Taxes.
     * @example
     * // Update many Taxes
     * const tax = await prisma.tax.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Taxes and only return the `id`
     * const taxWithIdOnly = await prisma.tax.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaxUpdateManyAndReturnArgs>(args: SelectSubset<T, TaxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tax.
     * @param {TaxUpsertArgs} args - Arguments to update or create a Tax.
     * @example
     * // Update or create a Tax
     * const tax = await prisma.tax.upsert({
     *   create: {
     *     // ... data to create a Tax
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tax we want to update
     *   }
     * })
     */
    upsert<T extends TaxUpsertArgs>(args: SelectSubset<T, TaxUpsertArgs<ExtArgs>>): Prisma__TaxClient<$Result.GetResult<Prisma.$TaxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxCountArgs} args - Arguments to filter Taxes to count.
     * @example
     * // Count the number of Taxes
     * const count = await prisma.tax.count({
     *   where: {
     *     // ... the filter for the Taxes we want to count
     *   }
     * })
    **/
    count<T extends TaxCountArgs>(
      args?: Subset<T, TaxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tax.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaxAggregateArgs>(args: Subset<T, TaxAggregateArgs>): Prisma.PrismaPromise<GetTaxAggregateType<T>>

    /**
     * Group by Tax.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxGroupByArgs['orderBy'] }
        : { orderBy?: TaxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tax model
   */
  readonly fields: TaxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tax.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tax model
   */
  interface TaxFieldRefs {
    readonly id: FieldRef<"Tax", 'Int'>
    readonly taxName: FieldRef<"Tax", 'String'>
    readonly percentage: FieldRef<"Tax", 'String'>
    readonly createdAt: FieldRef<"Tax", 'DateTime'>
    readonly updatedAt: FieldRef<"Tax", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tax findUnique
   */
  export type TaxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax findUniqueOrThrow
   */
  export type TaxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax findFirst
   */
  export type TaxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxes.
     */
    distinct?: TaxScalarFieldEnum | TaxScalarFieldEnum[]
  }

  /**
   * Tax findFirstOrThrow
   */
  export type TaxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Tax to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Taxes.
     */
    distinct?: TaxScalarFieldEnum | TaxScalarFieldEnum[]
  }

  /**
   * Tax findMany
   */
  export type TaxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter, which Taxes to fetch.
     */
    where?: TaxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Taxes to fetch.
     */
    orderBy?: TaxOrderByWithRelationInput | TaxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Taxes.
     */
    cursor?: TaxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Taxes.
     */
    skip?: number
    distinct?: TaxScalarFieldEnum | TaxScalarFieldEnum[]
  }

  /**
   * Tax create
   */
  export type TaxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data needed to create a Tax.
     */
    data: XOR<TaxCreateInput, TaxUncheckedCreateInput>
  }

  /**
   * Tax createMany
   */
  export type TaxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Taxes.
     */
    data: TaxCreateManyInput | TaxCreateManyInput[]
  }

  /**
   * Tax createManyAndReturn
   */
  export type TaxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data used to create many Taxes.
     */
    data: TaxCreateManyInput | TaxCreateManyInput[]
  }

  /**
   * Tax update
   */
  export type TaxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data needed to update a Tax.
     */
    data: XOR<TaxUpdateInput, TaxUncheckedUpdateInput>
    /**
     * Choose, which Tax to update.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax updateMany
   */
  export type TaxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Taxes.
     */
    data: XOR<TaxUpdateManyMutationInput, TaxUncheckedUpdateManyInput>
    /**
     * Filter which Taxes to update
     */
    where?: TaxWhereInput
    /**
     * Limit how many Taxes to update.
     */
    limit?: number
  }

  /**
   * Tax updateManyAndReturn
   */
  export type TaxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The data used to update Taxes.
     */
    data: XOR<TaxUpdateManyMutationInput, TaxUncheckedUpdateManyInput>
    /**
     * Filter which Taxes to update
     */
    where?: TaxWhereInput
    /**
     * Limit how many Taxes to update.
     */
    limit?: number
  }

  /**
   * Tax upsert
   */
  export type TaxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * The filter to search for the Tax to update in case it exists.
     */
    where: TaxWhereUniqueInput
    /**
     * In case the Tax found by the `where` argument doesn't exist, create a new Tax with this data.
     */
    create: XOR<TaxCreateInput, TaxUncheckedCreateInput>
    /**
     * In case the Tax was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaxUpdateInput, TaxUncheckedUpdateInput>
  }

  /**
   * Tax delete
   */
  export type TaxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
    /**
     * Filter which Tax to delete.
     */
    where: TaxWhereUniqueInput
  }

  /**
   * Tax deleteMany
   */
  export type TaxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taxes to delete
     */
    where?: TaxWhereInput
    /**
     * Limit how many Taxes to delete.
     */
    limit?: number
  }

  /**
   * Tax without action
   */
  export type TaxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tax
     */
    select?: TaxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tax
     */
    omit?: TaxOmit<ExtArgs> | null
  }


  /**
   * Model Sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    subTotal: number | null
    netTotal: number | null
    discount: number | null
    deliveryCharge: number | null
  }

  export type SalesSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    subTotal: number | null
    netTotal: number | null
    discount: number | null
    deliveryCharge: number | null
  }

  export type SalesMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    salesNumber: string | null
    patientId: number | null
    patientName: string | null
    patientContact: string | null
    patientAddress: string | null
    subTotal: number | null
    netTotal: number | null
    discount: number | null
    discountType: string | null
    deliveryCharge: number | null
  }

  export type SalesMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    salesNumber: string | null
    patientId: number | null
    patientName: string | null
    patientContact: string | null
    patientAddress: string | null
    subTotal: number | null
    netTotal: number | null
    discount: number | null
    discountType: string | null
    deliveryCharge: number | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    salesNumber: number
    patientId: number
    patientName: number
    patientContact: number
    patientAddress: number
    subTotal: number
    netTotal: number
    discount: number
    discountType: number
    deliveryCharge: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    id?: true
    patientId?: true
    subTotal?: true
    netTotal?: true
    discount?: true
    deliveryCharge?: true
  }

  export type SalesSumAggregateInputType = {
    id?: true
    patientId?: true
    subTotal?: true
    netTotal?: true
    discount?: true
    deliveryCharge?: true
  }

  export type SalesMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    salesNumber?: true
    patientId?: true
    patientName?: true
    patientContact?: true
    patientAddress?: true
    subTotal?: true
    netTotal?: true
    discount?: true
    discountType?: true
    deliveryCharge?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    salesNumber?: true
    patientId?: true
    patientName?: true
    patientContact?: true
    patientAddress?: true
    subTotal?: true
    netTotal?: true
    discount?: true
    discountType?: true
    deliveryCharge?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    salesNumber?: true
    patientId?: true
    patientName?: true
    patientContact?: true
    patientAddress?: true
    subTotal?: true
    netTotal?: true
    discount?: true
    discountType?: true
    deliveryCharge?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to aggregate.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type SalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithAggregationInput | SalesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: SalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    salesNumber: string
    patientId: number | null
    patientName: string | null
    patientContact: string | null
    patientAddress: string | null
    subTotal: number
    netTotal: number
    discount: number
    discountType: string
    deliveryCharge: number
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends SalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type SalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salesNumber?: boolean
    patientId?: boolean
    patientName?: boolean
    patientContact?: boolean
    patientAddress?: boolean
    subTotal?: boolean
    netTotal?: boolean
    discount?: boolean
    discountType?: boolean
    deliveryCharge?: boolean
    items?: boolean | Sales$itemsArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salesNumber?: boolean
    patientId?: boolean
    patientName?: boolean
    patientContact?: boolean
    patientAddress?: boolean
    subTotal?: boolean
    netTotal?: boolean
    discount?: boolean
    discountType?: boolean
    deliveryCharge?: boolean
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salesNumber?: boolean
    patientId?: boolean
    patientName?: boolean
    patientContact?: boolean
    patientAddress?: boolean
    subTotal?: boolean
    netTotal?: boolean
    discount?: boolean
    discountType?: boolean
    deliveryCharge?: boolean
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salesNumber?: boolean
    patientId?: boolean
    patientName?: boolean
    patientContact?: boolean
    patientAddress?: boolean
    subTotal?: boolean
    netTotal?: boolean
    discount?: boolean
    discountType?: boolean
    deliveryCharge?: boolean
  }

  export type SalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "salesNumber" | "patientId" | "patientName" | "patientContact" | "patientAddress" | "subTotal" | "netTotal" | "discount" | "discountType" | "deliveryCharge", ExtArgs["result"]["sales"]>
  export type SalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Sales$itemsArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sales"
    objects: {
      items: Prisma.$SalesItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      salesNumber: string
      patientId: number | null
      patientName: string | null
      patientContact: string | null
      patientAddress: string | null
      subTotal: number
      netTotal: number
      discount: number
      discountType: string
      deliveryCharge: number
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type SalesGetPayload<S extends boolean | null | undefined | SalesDefaultArgs> = $Result.GetResult<Prisma.$SalesPayload, S>

  type SalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface SalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sales'], meta: { name: 'Sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {SalesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesFindUniqueArgs>(args: SelectSubset<T, SalesFindUniqueArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesFindFirstArgs>(args?: SelectSubset<T, SalesFindFirstArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesFindManyArgs>(args?: SelectSubset<T, SalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {SalesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends SalesCreateArgs>(args: SelectSubset<T, SalesCreateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SalesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCreateManyArgs>(args?: SelectSubset<T, SalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SalesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {SalesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends SalesDeleteArgs>(args: SelectSubset<T, SalesDeleteArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {SalesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesUpdateArgs>(args: SelectSubset<T, SalesUpdateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SalesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesDeleteManyArgs>(args?: SelectSubset<T, SalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesUpdateManyArgs>(args: SelectSubset<T, SalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SalesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {SalesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends SalesUpsertArgs>(args: SelectSubset<T, SalesUpsertArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SalesCountArgs>(
      args?: Subset<T, SalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesGroupByArgs['orderBy'] }
        : { orderBy?: SalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sales model
   */
  readonly fields: SalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Sales$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Sales$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sales model
   */
  interface SalesFieldRefs {
    readonly id: FieldRef<"Sales", 'Int'>
    readonly createdAt: FieldRef<"Sales", 'DateTime'>
    readonly updatedAt: FieldRef<"Sales", 'DateTime'>
    readonly salesNumber: FieldRef<"Sales", 'String'>
    readonly patientId: FieldRef<"Sales", 'Int'>
    readonly patientName: FieldRef<"Sales", 'String'>
    readonly patientContact: FieldRef<"Sales", 'String'>
    readonly patientAddress: FieldRef<"Sales", 'String'>
    readonly subTotal: FieldRef<"Sales", 'Float'>
    readonly netTotal: FieldRef<"Sales", 'Float'>
    readonly discount: FieldRef<"Sales", 'Float'>
    readonly discountType: FieldRef<"Sales", 'String'>
    readonly deliveryCharge: FieldRef<"Sales", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Sales findUnique
   */
  export type SalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findUniqueOrThrow
   */
  export type SalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findFirst
   */
  export type SalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findFirstOrThrow
   */
  export type SalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findMany
   */
  export type SalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales create
   */
  export type SalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to create a Sales.
     */
    data: XOR<SalesCreateInput, SalesUncheckedCreateInput>
  }

  /**
   * Sales createMany
   */
  export type SalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
  }

  /**
   * Sales createManyAndReturn
   */
  export type SalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
  }

  /**
   * Sales update
   */
  export type SalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to update a Sales.
     */
    data: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
    /**
     * Choose, which Sales to update.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales updateMany
   */
  export type SalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sales updateManyAndReturn
   */
  export type SalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sales upsert
   */
  export type SalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The filter to search for the Sales to update in case it exists.
     */
    where: SalesWhereUniqueInput
    /**
     * In case the Sales found by the `where` argument doesn't exist, create a new Sales with this data.
     */
    create: XOR<SalesCreateInput, SalesUncheckedCreateInput>
    /**
     * In case the Sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
  }

  /**
   * Sales delete
   */
  export type SalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter which Sales to delete.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales deleteMany
   */
  export type SalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sales.items
   */
  export type Sales$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
    where?: SalesItemWhereInput
    orderBy?: SalesItemOrderByWithRelationInput | SalesItemOrderByWithRelationInput[]
    cursor?: SalesItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesItemScalarFieldEnum | SalesItemScalarFieldEnum[]
  }

  /**
   * Sales without action
   */
  export type SalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
  }


  /**
   * Model SalesItem
   */

  export type AggregateSalesItem = {
    _count: SalesItemCountAggregateOutputType | null
    _avg: SalesItemAvgAggregateOutputType | null
    _sum: SalesItemSumAggregateOutputType | null
    _min: SalesItemMinAggregateOutputType | null
    _max: SalesItemMaxAggregateOutputType | null
  }

  export type SalesItemAvgAggregateOutputType = {
    id: number | null
    saleId: number | null
    purchaseItemId: number | null
    itemId: number | null
    quantity: number | null
    sellingPrice: number | null
    totalAmount: number | null
  }

  export type SalesItemSumAggregateOutputType = {
    id: number | null
    saleId: number | null
    purchaseItemId: number | null
    itemId: number | null
    quantity: number | null
    sellingPrice: number | null
    totalAmount: number | null
  }

  export type SalesItemMinAggregateOutputType = {
    id: number | null
    saleId: number | null
    purchaseItemId: number | null
    itemId: number | null
    batchNumber: string | null
    quantity: number | null
    sellingPrice: number | null
    totalAmount: number | null
  }

  export type SalesItemMaxAggregateOutputType = {
    id: number | null
    saleId: number | null
    purchaseItemId: number | null
    itemId: number | null
    batchNumber: string | null
    quantity: number | null
    sellingPrice: number | null
    totalAmount: number | null
  }

  export type SalesItemCountAggregateOutputType = {
    id: number
    saleId: number
    purchaseItemId: number
    itemId: number
    batchNumber: number
    quantity: number
    sellingPrice: number
    totalAmount: number
    _all: number
  }


  export type SalesItemAvgAggregateInputType = {
    id?: true
    saleId?: true
    purchaseItemId?: true
    itemId?: true
    quantity?: true
    sellingPrice?: true
    totalAmount?: true
  }

  export type SalesItemSumAggregateInputType = {
    id?: true
    saleId?: true
    purchaseItemId?: true
    itemId?: true
    quantity?: true
    sellingPrice?: true
    totalAmount?: true
  }

  export type SalesItemMinAggregateInputType = {
    id?: true
    saleId?: true
    purchaseItemId?: true
    itemId?: true
    batchNumber?: true
    quantity?: true
    sellingPrice?: true
    totalAmount?: true
  }

  export type SalesItemMaxAggregateInputType = {
    id?: true
    saleId?: true
    purchaseItemId?: true
    itemId?: true
    batchNumber?: true
    quantity?: true
    sellingPrice?: true
    totalAmount?: true
  }

  export type SalesItemCountAggregateInputType = {
    id?: true
    saleId?: true
    purchaseItemId?: true
    itemId?: true
    batchNumber?: true
    quantity?: true
    sellingPrice?: true
    totalAmount?: true
    _all?: true
  }

  export type SalesItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesItem to aggregate.
     */
    where?: SalesItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesItems to fetch.
     */
    orderBy?: SalesItemOrderByWithRelationInput | SalesItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesItems
    **/
    _count?: true | SalesItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesItemMaxAggregateInputType
  }

  export type GetSalesItemAggregateType<T extends SalesItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesItem[P]>
      : GetScalarType<T[P], AggregateSalesItem[P]>
  }




  export type SalesItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesItemWhereInput
    orderBy?: SalesItemOrderByWithAggregationInput | SalesItemOrderByWithAggregationInput[]
    by: SalesItemScalarFieldEnum[] | SalesItemScalarFieldEnum
    having?: SalesItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesItemCountAggregateInputType | true
    _avg?: SalesItemAvgAggregateInputType
    _sum?: SalesItemSumAggregateInputType
    _min?: SalesItemMinAggregateInputType
    _max?: SalesItemMaxAggregateInputType
  }

  export type SalesItemGroupByOutputType = {
    id: number
    saleId: number
    purchaseItemId: number | null
    itemId: number
    batchNumber: string
    quantity: number
    sellingPrice: number
    totalAmount: number
    _count: SalesItemCountAggregateOutputType | null
    _avg: SalesItemAvgAggregateOutputType | null
    _sum: SalesItemSumAggregateOutputType | null
    _min: SalesItemMinAggregateOutputType | null
    _max: SalesItemMaxAggregateOutputType | null
  }

  type GetSalesItemGroupByPayload<T extends SalesItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesItemGroupByOutputType[P]>
            : GetScalarType<T[P], SalesItemGroupByOutputType[P]>
        }
      >
    >


  export type SalesItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    purchaseItemId?: boolean
    itemId?: boolean
    batchNumber?: boolean
    quantity?: boolean
    sellingPrice?: boolean
    totalAmount?: boolean
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesItem"]>

  export type SalesItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    purchaseItemId?: boolean
    itemId?: boolean
    batchNumber?: boolean
    quantity?: boolean
    sellingPrice?: boolean
    totalAmount?: boolean
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesItem"]>

  export type SalesItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    purchaseItemId?: boolean
    itemId?: boolean
    batchNumber?: boolean
    quantity?: boolean
    sellingPrice?: boolean
    totalAmount?: boolean
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesItem"]>

  export type SalesItemSelectScalar = {
    id?: boolean
    saleId?: boolean
    purchaseItemId?: boolean
    itemId?: boolean
    batchNumber?: boolean
    quantity?: boolean
    sellingPrice?: boolean
    totalAmount?: boolean
  }

  export type SalesItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saleId" | "purchaseItemId" | "itemId" | "batchNumber" | "quantity" | "sellingPrice" | "totalAmount", ExtArgs["result"]["salesItem"]>
  export type SalesItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }
  export type SalesItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }
  export type SalesItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }

  export type $SalesItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesItem"
    objects: {
      sale: Prisma.$SalesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      saleId: number
      purchaseItemId: number | null
      itemId: number
      batchNumber: string
      quantity: number
      sellingPrice: number
      totalAmount: number
    }, ExtArgs["result"]["salesItem"]>
    composites: {}
  }

  type SalesItemGetPayload<S extends boolean | null | undefined | SalesItemDefaultArgs> = $Result.GetResult<Prisma.$SalesItemPayload, S>

  type SalesItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesItemCountAggregateInputType | true
    }

  export interface SalesItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesItem'], meta: { name: 'SalesItem' } }
    /**
     * Find zero or one SalesItem that matches the filter.
     * @param {SalesItemFindUniqueArgs} args - Arguments to find a SalesItem
     * @example
     * // Get one SalesItem
     * const salesItem = await prisma.salesItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesItemFindUniqueArgs>(args: SelectSubset<T, SalesItemFindUniqueArgs<ExtArgs>>): Prisma__SalesItemClient<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesItemFindUniqueOrThrowArgs} args - Arguments to find a SalesItem
     * @example
     * // Get one SalesItem
     * const salesItem = await prisma.salesItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesItemClient<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesItemFindFirstArgs} args - Arguments to find a SalesItem
     * @example
     * // Get one SalesItem
     * const salesItem = await prisma.salesItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesItemFindFirstArgs>(args?: SelectSubset<T, SalesItemFindFirstArgs<ExtArgs>>): Prisma__SalesItemClient<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesItemFindFirstOrThrowArgs} args - Arguments to find a SalesItem
     * @example
     * // Get one SalesItem
     * const salesItem = await prisma.salesItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesItemClient<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesItems
     * const salesItems = await prisma.salesItem.findMany()
     * 
     * // Get first 10 SalesItems
     * const salesItems = await prisma.salesItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesItemWithIdOnly = await prisma.salesItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesItemFindManyArgs>(args?: SelectSubset<T, SalesItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesItem.
     * @param {SalesItemCreateArgs} args - Arguments to create a SalesItem.
     * @example
     * // Create one SalesItem
     * const SalesItem = await prisma.salesItem.create({
     *   data: {
     *     // ... data to create a SalesItem
     *   }
     * })
     * 
     */
    create<T extends SalesItemCreateArgs>(args: SelectSubset<T, SalesItemCreateArgs<ExtArgs>>): Prisma__SalesItemClient<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesItems.
     * @param {SalesItemCreateManyArgs} args - Arguments to create many SalesItems.
     * @example
     * // Create many SalesItems
     * const salesItem = await prisma.salesItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesItemCreateManyArgs>(args?: SelectSubset<T, SalesItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesItems and returns the data saved in the database.
     * @param {SalesItemCreateManyAndReturnArgs} args - Arguments to create many SalesItems.
     * @example
     * // Create many SalesItems
     * const salesItem = await prisma.salesItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesItems and only return the `id`
     * const salesItemWithIdOnly = await prisma.salesItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesItem.
     * @param {SalesItemDeleteArgs} args - Arguments to delete one SalesItem.
     * @example
     * // Delete one SalesItem
     * const SalesItem = await prisma.salesItem.delete({
     *   where: {
     *     // ... filter to delete one SalesItem
     *   }
     * })
     * 
     */
    delete<T extends SalesItemDeleteArgs>(args: SelectSubset<T, SalesItemDeleteArgs<ExtArgs>>): Prisma__SalesItemClient<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesItem.
     * @param {SalesItemUpdateArgs} args - Arguments to update one SalesItem.
     * @example
     * // Update one SalesItem
     * const salesItem = await prisma.salesItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesItemUpdateArgs>(args: SelectSubset<T, SalesItemUpdateArgs<ExtArgs>>): Prisma__SalesItemClient<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesItems.
     * @param {SalesItemDeleteManyArgs} args - Arguments to filter SalesItems to delete.
     * @example
     * // Delete a few SalesItems
     * const { count } = await prisma.salesItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesItemDeleteManyArgs>(args?: SelectSubset<T, SalesItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesItems
     * const salesItem = await prisma.salesItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesItemUpdateManyArgs>(args: SelectSubset<T, SalesItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesItems and returns the data updated in the database.
     * @param {SalesItemUpdateManyAndReturnArgs} args - Arguments to update many SalesItems.
     * @example
     * // Update many SalesItems
     * const salesItem = await prisma.salesItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesItems and only return the `id`
     * const salesItemWithIdOnly = await prisma.salesItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesItem.
     * @param {SalesItemUpsertArgs} args - Arguments to update or create a SalesItem.
     * @example
     * // Update or create a SalesItem
     * const salesItem = await prisma.salesItem.upsert({
     *   create: {
     *     // ... data to create a SalesItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesItem we want to update
     *   }
     * })
     */
    upsert<T extends SalesItemUpsertArgs>(args: SelectSubset<T, SalesItemUpsertArgs<ExtArgs>>): Prisma__SalesItemClient<$Result.GetResult<Prisma.$SalesItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesItemCountArgs} args - Arguments to filter SalesItems to count.
     * @example
     * // Count the number of SalesItems
     * const count = await prisma.salesItem.count({
     *   where: {
     *     // ... the filter for the SalesItems we want to count
     *   }
     * })
    **/
    count<T extends SalesItemCountArgs>(
      args?: Subset<T, SalesItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesItemAggregateArgs>(args: Subset<T, SalesItemAggregateArgs>): Prisma.PrismaPromise<GetSalesItemAggregateType<T>>

    /**
     * Group by SalesItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesItemGroupByArgs['orderBy'] }
        : { orderBy?: SalesItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesItem model
   */
  readonly fields: SalesItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends SalesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalesDefaultArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesItem model
   */
  interface SalesItemFieldRefs {
    readonly id: FieldRef<"SalesItem", 'Int'>
    readonly saleId: FieldRef<"SalesItem", 'Int'>
    readonly purchaseItemId: FieldRef<"SalesItem", 'Int'>
    readonly itemId: FieldRef<"SalesItem", 'Int'>
    readonly batchNumber: FieldRef<"SalesItem", 'String'>
    readonly quantity: FieldRef<"SalesItem", 'Int'>
    readonly sellingPrice: FieldRef<"SalesItem", 'Float'>
    readonly totalAmount: FieldRef<"SalesItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * SalesItem findUnique
   */
  export type SalesItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesItem to fetch.
     */
    where: SalesItemWhereUniqueInput
  }

  /**
   * SalesItem findUniqueOrThrow
   */
  export type SalesItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesItem to fetch.
     */
    where: SalesItemWhereUniqueInput
  }

  /**
   * SalesItem findFirst
   */
  export type SalesItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesItem to fetch.
     */
    where?: SalesItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesItems to fetch.
     */
    orderBy?: SalesItemOrderByWithRelationInput | SalesItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesItems.
     */
    cursor?: SalesItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesItems.
     */
    distinct?: SalesItemScalarFieldEnum | SalesItemScalarFieldEnum[]
  }

  /**
   * SalesItem findFirstOrThrow
   */
  export type SalesItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesItem to fetch.
     */
    where?: SalesItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesItems to fetch.
     */
    orderBy?: SalesItemOrderByWithRelationInput | SalesItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesItems.
     */
    cursor?: SalesItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesItems.
     */
    distinct?: SalesItemScalarFieldEnum | SalesItemScalarFieldEnum[]
  }

  /**
   * SalesItem findMany
   */
  export type SalesItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesItems to fetch.
     */
    where?: SalesItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesItems to fetch.
     */
    orderBy?: SalesItemOrderByWithRelationInput | SalesItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesItems.
     */
    cursor?: SalesItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesItems.
     */
    skip?: number
    distinct?: SalesItemScalarFieldEnum | SalesItemScalarFieldEnum[]
  }

  /**
   * SalesItem create
   */
  export type SalesItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesItem.
     */
    data: XOR<SalesItemCreateInput, SalesItemUncheckedCreateInput>
  }

  /**
   * SalesItem createMany
   */
  export type SalesItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesItems.
     */
    data: SalesItemCreateManyInput | SalesItemCreateManyInput[]
  }

  /**
   * SalesItem createManyAndReturn
   */
  export type SalesItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * The data used to create many SalesItems.
     */
    data: SalesItemCreateManyInput | SalesItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesItem update
   */
  export type SalesItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesItem.
     */
    data: XOR<SalesItemUpdateInput, SalesItemUncheckedUpdateInput>
    /**
     * Choose, which SalesItem to update.
     */
    where: SalesItemWhereUniqueInput
  }

  /**
   * SalesItem updateMany
   */
  export type SalesItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesItems.
     */
    data: XOR<SalesItemUpdateManyMutationInput, SalesItemUncheckedUpdateManyInput>
    /**
     * Filter which SalesItems to update
     */
    where?: SalesItemWhereInput
    /**
     * Limit how many SalesItems to update.
     */
    limit?: number
  }

  /**
   * SalesItem updateManyAndReturn
   */
  export type SalesItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * The data used to update SalesItems.
     */
    data: XOR<SalesItemUpdateManyMutationInput, SalesItemUncheckedUpdateManyInput>
    /**
     * Filter which SalesItems to update
     */
    where?: SalesItemWhereInput
    /**
     * Limit how many SalesItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesItem upsert
   */
  export type SalesItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesItem to update in case it exists.
     */
    where: SalesItemWhereUniqueInput
    /**
     * In case the SalesItem found by the `where` argument doesn't exist, create a new SalesItem with this data.
     */
    create: XOR<SalesItemCreateInput, SalesItemUncheckedCreateInput>
    /**
     * In case the SalesItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesItemUpdateInput, SalesItemUncheckedUpdateInput>
  }

  /**
   * SalesItem delete
   */
  export type SalesItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
    /**
     * Filter which SalesItem to delete.
     */
    where: SalesItemWhereUniqueInput
  }

  /**
   * SalesItem deleteMany
   */
  export type SalesItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesItems to delete
     */
    where?: SalesItemWhereInput
    /**
     * Limit how many SalesItems to delete.
     */
    limit?: number
  }

  /**
   * SalesItem without action
   */
  export type SalesItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesItem
     */
    select?: SalesItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesItem
     */
    omit?: SalesItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    itemCode: 'itemCode',
    saltName: 'saltName',
    brandName: 'brandName',
    manufacturer: 'manufacturer',
    packageQuantity: 'packageQuantity',
    productForm: 'productForm',
    minQuantityAlert: 'minQuantityAlert',
    storageCondition: 'storageCondition',
    boxNumber: 'boxNumber',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    purchaseDate: 'purchaseDate',
    purchaseNumber: 'purchaseNumber',
    notes: 'notes',
    discountType: 'discountType',
    discount: 'discount',
    subTotal: 'subTotal',
    netTotal: 'netTotal',
    tax: 'tax',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const PurchaseItemScalarFieldEnum: {
    id: 'id',
    purchaseId: 'purchaseId',
    medicineId: 'medicineId',
    batchNumber: 'batchNumber',
    expiryDate: 'expiryDate',
    purchasePrice: 'purchasePrice',
    sellingPrice: 'sellingPrice',
    sellingPricePerMedicine: 'sellingPricePerMedicine',
    quantity: 'quantity',
    packageQuantity: 'packageQuantity',
    profit: 'profit',
    tax: 'tax',
    total: 'total',
    totalMedicines: 'totalMedicines',
    remainingMedicines: 'remainingMedicines',
    scheme: 'scheme',
    isSold: 'isSold',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurchaseItemScalarFieldEnum = (typeof PurchaseItemScalarFieldEnum)[keyof typeof PurchaseItemScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    contactPerson: 'contactPerson',
    contact: 'contact',
    email: 'email',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const TaxScalarFieldEnum: {
    id: 'id',
    taxName: 'taxName',
    percentage: 'percentage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaxScalarFieldEnum = (typeof TaxScalarFieldEnum)[keyof typeof TaxScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    salesNumber: 'salesNumber',
    patientId: 'patientId',
    patientName: 'patientName',
    patientContact: 'patientContact',
    patientAddress: 'patientAddress',
    subTotal: 'subTotal',
    netTotal: 'netTotal',
    discount: 'discount',
    discountType: 'discountType',
    deliveryCharge: 'deliveryCharge'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const SalesItemScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    purchaseItemId: 'purchaseItemId',
    itemId: 'itemId',
    batchNumber: 'batchNumber',
    quantity: 'quantity',
    sellingPrice: 'sellingPrice',
    totalAmount: 'totalAmount'
  };

  export type SalesItemScalarFieldEnum = (typeof SalesItemScalarFieldEnum)[keyof typeof SalesItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type medicineWhereInput = {
    AND?: medicineWhereInput | medicineWhereInput[]
    OR?: medicineWhereInput[]
    NOT?: medicineWhereInput | medicineWhereInput[]
    id?: IntFilter<"medicine"> | number
    itemCode?: StringFilter<"medicine"> | string
    saltName?: StringFilter<"medicine"> | string
    brandName?: StringFilter<"medicine"> | string
    manufacturer?: StringFilter<"medicine"> | string
    packageQuantity?: IntFilter<"medicine"> | number
    productForm?: StringFilter<"medicine"> | string
    minQuantityAlert?: IntFilter<"medicine"> | number
    storageCondition?: StringFilter<"medicine"> | string
    boxNumber?: IntNullableFilter<"medicine"> | number | null
    description?: StringNullableFilter<"medicine"> | string | null
    createdAt?: DateTimeFilter<"medicine"> | Date | string
    updatedAt?: DateTimeFilter<"medicine"> | Date | string
    purchaseItems?: PurchaseItemListRelationFilter
  }

  export type medicineOrderByWithRelationInput = {
    id?: SortOrder
    itemCode?: SortOrder
    saltName?: SortOrder
    brandName?: SortOrder
    manufacturer?: SortOrder
    packageQuantity?: SortOrder
    productForm?: SortOrder
    minQuantityAlert?: SortOrder
    storageCondition?: SortOrder
    boxNumber?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchaseItems?: PurchaseItemOrderByRelationAggregateInput
  }

  export type medicineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    saltName?: string
    AND?: medicineWhereInput | medicineWhereInput[]
    OR?: medicineWhereInput[]
    NOT?: medicineWhereInput | medicineWhereInput[]
    itemCode?: StringFilter<"medicine"> | string
    brandName?: StringFilter<"medicine"> | string
    manufacturer?: StringFilter<"medicine"> | string
    packageQuantity?: IntFilter<"medicine"> | number
    productForm?: StringFilter<"medicine"> | string
    minQuantityAlert?: IntFilter<"medicine"> | number
    storageCondition?: StringFilter<"medicine"> | string
    boxNumber?: IntNullableFilter<"medicine"> | number | null
    description?: StringNullableFilter<"medicine"> | string | null
    createdAt?: DateTimeFilter<"medicine"> | Date | string
    updatedAt?: DateTimeFilter<"medicine"> | Date | string
    purchaseItems?: PurchaseItemListRelationFilter
  }, "id" | "saltName">

  export type medicineOrderByWithAggregationInput = {
    id?: SortOrder
    itemCode?: SortOrder
    saltName?: SortOrder
    brandName?: SortOrder
    manufacturer?: SortOrder
    packageQuantity?: SortOrder
    productForm?: SortOrder
    minQuantityAlert?: SortOrder
    storageCondition?: SortOrder
    boxNumber?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: medicineCountOrderByAggregateInput
    _avg?: medicineAvgOrderByAggregateInput
    _max?: medicineMaxOrderByAggregateInput
    _min?: medicineMinOrderByAggregateInput
    _sum?: medicineSumOrderByAggregateInput
  }

  export type medicineScalarWhereWithAggregatesInput = {
    AND?: medicineScalarWhereWithAggregatesInput | medicineScalarWhereWithAggregatesInput[]
    OR?: medicineScalarWhereWithAggregatesInput[]
    NOT?: medicineScalarWhereWithAggregatesInput | medicineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"medicine"> | number
    itemCode?: StringWithAggregatesFilter<"medicine"> | string
    saltName?: StringWithAggregatesFilter<"medicine"> | string
    brandName?: StringWithAggregatesFilter<"medicine"> | string
    manufacturer?: StringWithAggregatesFilter<"medicine"> | string
    packageQuantity?: IntWithAggregatesFilter<"medicine"> | number
    productForm?: StringWithAggregatesFilter<"medicine"> | string
    minQuantityAlert?: IntWithAggregatesFilter<"medicine"> | number
    storageCondition?: StringWithAggregatesFilter<"medicine"> | string
    boxNumber?: IntNullableWithAggregatesFilter<"medicine"> | number | null
    description?: StringNullableWithAggregatesFilter<"medicine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"medicine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"medicine"> | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: IntFilter<"Purchase"> | number
    supplierId?: IntFilter<"Purchase"> | number
    purchaseDate?: DateTimeFilter<"Purchase"> | Date | string
    purchaseNumber?: StringFilter<"Purchase"> | string
    notes?: StringNullableFilter<"Purchase"> | string | null
    discountType?: StringFilter<"Purchase"> | string
    discount?: FloatFilter<"Purchase"> | number
    subTotal?: FloatFilter<"Purchase"> | number
    netTotal?: FloatFilter<"Purchase"> | number
    tax?: FloatFilter<"Purchase"> | number
    total?: FloatFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    purchasedItems?: PurchaseItemListRelationFilter
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    purchaseDate?: SortOrder
    purchaseNumber?: SortOrder
    notes?: SortOrderInput | SortOrder
    discountType?: SortOrder
    discount?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchasedItems?: PurchaseItemOrderByRelationAggregateInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    supplierId?: IntFilter<"Purchase"> | number
    purchaseDate?: DateTimeFilter<"Purchase"> | Date | string
    purchaseNumber?: StringFilter<"Purchase"> | string
    notes?: StringNullableFilter<"Purchase"> | string | null
    discountType?: StringFilter<"Purchase"> | string
    discount?: FloatFilter<"Purchase"> | number
    subTotal?: FloatFilter<"Purchase"> | number
    netTotal?: FloatFilter<"Purchase"> | number
    tax?: FloatFilter<"Purchase"> | number
    total?: FloatFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    purchasedItems?: PurchaseItemListRelationFilter
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    purchaseDate?: SortOrder
    purchaseNumber?: SortOrder
    notes?: SortOrderInput | SortOrder
    discountType?: SortOrder
    discount?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purchase"> | number
    supplierId?: IntWithAggregatesFilter<"Purchase"> | number
    purchaseDate?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    purchaseNumber?: StringWithAggregatesFilter<"Purchase"> | string
    notes?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    discountType?: StringWithAggregatesFilter<"Purchase"> | string
    discount?: FloatWithAggregatesFilter<"Purchase"> | number
    subTotal?: FloatWithAggregatesFilter<"Purchase"> | number
    netTotal?: FloatWithAggregatesFilter<"Purchase"> | number
    tax?: FloatWithAggregatesFilter<"Purchase"> | number
    total?: FloatWithAggregatesFilter<"Purchase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type PurchaseItemWhereInput = {
    AND?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    OR?: PurchaseItemWhereInput[]
    NOT?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    id?: IntFilter<"PurchaseItem"> | number
    purchaseId?: IntFilter<"PurchaseItem"> | number
    medicineId?: IntFilter<"PurchaseItem"> | number
    batchNumber?: StringFilter<"PurchaseItem"> | string
    expiryDate?: DateTimeFilter<"PurchaseItem"> | Date | string
    purchasePrice?: FloatFilter<"PurchaseItem"> | number
    sellingPrice?: FloatFilter<"PurchaseItem"> | number
    sellingPricePerMedicine?: FloatFilter<"PurchaseItem"> | number
    quantity?: IntFilter<"PurchaseItem"> | number
    packageQuantity?: FloatFilter<"PurchaseItem"> | number
    profit?: FloatFilter<"PurchaseItem"> | number
    tax?: FloatFilter<"PurchaseItem"> | number
    total?: FloatFilter<"PurchaseItem"> | number
    totalMedicines?: FloatFilter<"PurchaseItem"> | number
    remainingMedicines?: FloatFilter<"PurchaseItem"> | number
    scheme?: FloatFilter<"PurchaseItem"> | number
    isSold?: BoolFilter<"PurchaseItem"> | boolean
    createdAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, medicineWhereInput>
  }

  export type PurchaseItemOrderByWithRelationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    medicineId?: SortOrder
    batchNumber?: SortOrder
    expiryDate?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    sellingPricePerMedicine?: SortOrder
    quantity?: SortOrder
    packageQuantity?: SortOrder
    profit?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    totalMedicines?: SortOrder
    remainingMedicines?: SortOrder
    scheme?: SortOrder
    isSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
    medicine?: medicineOrderByWithRelationInput
  }

  export type PurchaseItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    OR?: PurchaseItemWhereInput[]
    NOT?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    purchaseId?: IntFilter<"PurchaseItem"> | number
    medicineId?: IntFilter<"PurchaseItem"> | number
    batchNumber?: StringFilter<"PurchaseItem"> | string
    expiryDate?: DateTimeFilter<"PurchaseItem"> | Date | string
    purchasePrice?: FloatFilter<"PurchaseItem"> | number
    sellingPrice?: FloatFilter<"PurchaseItem"> | number
    sellingPricePerMedicine?: FloatFilter<"PurchaseItem"> | number
    quantity?: IntFilter<"PurchaseItem"> | number
    packageQuantity?: FloatFilter<"PurchaseItem"> | number
    profit?: FloatFilter<"PurchaseItem"> | number
    tax?: FloatFilter<"PurchaseItem"> | number
    total?: FloatFilter<"PurchaseItem"> | number
    totalMedicines?: FloatFilter<"PurchaseItem"> | number
    remainingMedicines?: FloatFilter<"PurchaseItem"> | number
    scheme?: FloatFilter<"PurchaseItem"> | number
    isSold?: BoolFilter<"PurchaseItem"> | boolean
    createdAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    purchase?: XOR<PurchaseScalarRelationFilter, PurchaseWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, medicineWhereInput>
  }, "id">

  export type PurchaseItemOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    medicineId?: SortOrder
    batchNumber?: SortOrder
    expiryDate?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    sellingPricePerMedicine?: SortOrder
    quantity?: SortOrder
    packageQuantity?: SortOrder
    profit?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    totalMedicines?: SortOrder
    remainingMedicines?: SortOrder
    scheme?: SortOrder
    isSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseItemCountOrderByAggregateInput
    _avg?: PurchaseItemAvgOrderByAggregateInput
    _max?: PurchaseItemMaxOrderByAggregateInput
    _min?: PurchaseItemMinOrderByAggregateInput
    _sum?: PurchaseItemSumOrderByAggregateInput
  }

  export type PurchaseItemScalarWhereWithAggregatesInput = {
    AND?: PurchaseItemScalarWhereWithAggregatesInput | PurchaseItemScalarWhereWithAggregatesInput[]
    OR?: PurchaseItemScalarWhereWithAggregatesInput[]
    NOT?: PurchaseItemScalarWhereWithAggregatesInput | PurchaseItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseItem"> | number
    purchaseId?: IntWithAggregatesFilter<"PurchaseItem"> | number
    medicineId?: IntWithAggregatesFilter<"PurchaseItem"> | number
    batchNumber?: StringWithAggregatesFilter<"PurchaseItem"> | string
    expiryDate?: DateTimeWithAggregatesFilter<"PurchaseItem"> | Date | string
    purchasePrice?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    sellingPrice?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    sellingPricePerMedicine?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    quantity?: IntWithAggregatesFilter<"PurchaseItem"> | number
    packageQuantity?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    profit?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    tax?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    total?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    totalMedicines?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    remainingMedicines?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    scheme?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    isSold?: BoolWithAggregatesFilter<"PurchaseItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseItem"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    companyName?: StringFilter<"Supplier"> | string
    contactPerson?: StringFilter<"Supplier"> | string
    contact?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    address?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    contactPerson?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    companyName?: StringFilter<"Supplier"> | string
    contactPerson?: StringFilter<"Supplier"> | string
    contact?: StringFilter<"Supplier"> | string
    address?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
  }, "id" | "email">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    contactPerson?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    companyName?: StringWithAggregatesFilter<"Supplier"> | string
    contactPerson?: StringWithAggregatesFilter<"Supplier"> | string
    contact?: StringWithAggregatesFilter<"Supplier"> | string
    email?: StringWithAggregatesFilter<"Supplier"> | string
    address?: StringWithAggregatesFilter<"Supplier"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type TaxWhereInput = {
    AND?: TaxWhereInput | TaxWhereInput[]
    OR?: TaxWhereInput[]
    NOT?: TaxWhereInput | TaxWhereInput[]
    id?: IntFilter<"Tax"> | number
    taxName?: StringFilter<"Tax"> | string
    percentage?: StringFilter<"Tax"> | string
    createdAt?: DateTimeFilter<"Tax"> | Date | string
    updatedAt?: DateTimeFilter<"Tax"> | Date | string
  }

  export type TaxOrderByWithRelationInput = {
    id?: SortOrder
    taxName?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaxWhereInput | TaxWhereInput[]
    OR?: TaxWhereInput[]
    NOT?: TaxWhereInput | TaxWhereInput[]
    taxName?: StringFilter<"Tax"> | string
    percentage?: StringFilter<"Tax"> | string
    createdAt?: DateTimeFilter<"Tax"> | Date | string
    updatedAt?: DateTimeFilter<"Tax"> | Date | string
  }, "id">

  export type TaxOrderByWithAggregationInput = {
    id?: SortOrder
    taxName?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaxCountOrderByAggregateInput
    _avg?: TaxAvgOrderByAggregateInput
    _max?: TaxMaxOrderByAggregateInput
    _min?: TaxMinOrderByAggregateInput
    _sum?: TaxSumOrderByAggregateInput
  }

  export type TaxScalarWhereWithAggregatesInput = {
    AND?: TaxScalarWhereWithAggregatesInput | TaxScalarWhereWithAggregatesInput[]
    OR?: TaxScalarWhereWithAggregatesInput[]
    NOT?: TaxScalarWhereWithAggregatesInput | TaxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tax"> | number
    taxName?: StringWithAggregatesFilter<"Tax"> | string
    percentage?: StringWithAggregatesFilter<"Tax"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tax"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tax"> | Date | string
  }

  export type SalesWhereInput = {
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    id?: IntFilter<"Sales"> | number
    createdAt?: DateTimeFilter<"Sales"> | Date | string
    updatedAt?: DateTimeFilter<"Sales"> | Date | string
    salesNumber?: StringFilter<"Sales"> | string
    patientId?: IntNullableFilter<"Sales"> | number | null
    patientName?: StringNullableFilter<"Sales"> | string | null
    patientContact?: StringNullableFilter<"Sales"> | string | null
    patientAddress?: StringNullableFilter<"Sales"> | string | null
    subTotal?: FloatFilter<"Sales"> | number
    netTotal?: FloatFilter<"Sales"> | number
    discount?: FloatFilter<"Sales"> | number
    discountType?: StringFilter<"Sales"> | string
    deliveryCharge?: FloatFilter<"Sales"> | number
    items?: SalesItemListRelationFilter
  }

  export type SalesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salesNumber?: SortOrder
    patientId?: SortOrderInput | SortOrder
    patientName?: SortOrderInput | SortOrder
    patientContact?: SortOrderInput | SortOrder
    patientAddress?: SortOrderInput | SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    deliveryCharge?: SortOrder
    items?: SalesItemOrderByRelationAggregateInput
  }

  export type SalesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    createdAt?: DateTimeFilter<"Sales"> | Date | string
    updatedAt?: DateTimeFilter<"Sales"> | Date | string
    salesNumber?: StringFilter<"Sales"> | string
    patientId?: IntNullableFilter<"Sales"> | number | null
    patientName?: StringNullableFilter<"Sales"> | string | null
    patientContact?: StringNullableFilter<"Sales"> | string | null
    patientAddress?: StringNullableFilter<"Sales"> | string | null
    subTotal?: FloatFilter<"Sales"> | number
    netTotal?: FloatFilter<"Sales"> | number
    discount?: FloatFilter<"Sales"> | number
    discountType?: StringFilter<"Sales"> | string
    deliveryCharge?: FloatFilter<"Sales"> | number
    items?: SalesItemListRelationFilter
  }, "id">

  export type SalesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salesNumber?: SortOrder
    patientId?: SortOrderInput | SortOrder
    patientName?: SortOrderInput | SortOrder
    patientContact?: SortOrderInput | SortOrder
    patientAddress?: SortOrderInput | SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    deliveryCharge?: SortOrder
    _count?: SalesCountOrderByAggregateInput
    _avg?: SalesAvgOrderByAggregateInput
    _max?: SalesMaxOrderByAggregateInput
    _min?: SalesMinOrderByAggregateInput
    _sum?: SalesSumOrderByAggregateInput
  }

  export type SalesScalarWhereWithAggregatesInput = {
    AND?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    OR?: SalesScalarWhereWithAggregatesInput[]
    NOT?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sales"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    salesNumber?: StringWithAggregatesFilter<"Sales"> | string
    patientId?: IntNullableWithAggregatesFilter<"Sales"> | number | null
    patientName?: StringNullableWithAggregatesFilter<"Sales"> | string | null
    patientContact?: StringNullableWithAggregatesFilter<"Sales"> | string | null
    patientAddress?: StringNullableWithAggregatesFilter<"Sales"> | string | null
    subTotal?: FloatWithAggregatesFilter<"Sales"> | number
    netTotal?: FloatWithAggregatesFilter<"Sales"> | number
    discount?: FloatWithAggregatesFilter<"Sales"> | number
    discountType?: StringWithAggregatesFilter<"Sales"> | string
    deliveryCharge?: FloatWithAggregatesFilter<"Sales"> | number
  }

  export type SalesItemWhereInput = {
    AND?: SalesItemWhereInput | SalesItemWhereInput[]
    OR?: SalesItemWhereInput[]
    NOT?: SalesItemWhereInput | SalesItemWhereInput[]
    id?: IntFilter<"SalesItem"> | number
    saleId?: IntFilter<"SalesItem"> | number
    purchaseItemId?: IntNullableFilter<"SalesItem"> | number | null
    itemId?: IntFilter<"SalesItem"> | number
    batchNumber?: StringFilter<"SalesItem"> | string
    quantity?: IntFilter<"SalesItem"> | number
    sellingPrice?: FloatFilter<"SalesItem"> | number
    totalAmount?: FloatFilter<"SalesItem"> | number
    sale?: XOR<SalesScalarRelationFilter, SalesWhereInput>
  }

  export type SalesItemOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    purchaseItemId?: SortOrderInput | SortOrder
    itemId?: SortOrder
    batchNumber?: SortOrder
    quantity?: SortOrder
    sellingPrice?: SortOrder
    totalAmount?: SortOrder
    sale?: SalesOrderByWithRelationInput
  }

  export type SalesItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalesItemWhereInput | SalesItemWhereInput[]
    OR?: SalesItemWhereInput[]
    NOT?: SalesItemWhereInput | SalesItemWhereInput[]
    saleId?: IntFilter<"SalesItem"> | number
    purchaseItemId?: IntNullableFilter<"SalesItem"> | number | null
    itemId?: IntFilter<"SalesItem"> | number
    batchNumber?: StringFilter<"SalesItem"> | string
    quantity?: IntFilter<"SalesItem"> | number
    sellingPrice?: FloatFilter<"SalesItem"> | number
    totalAmount?: FloatFilter<"SalesItem"> | number
    sale?: XOR<SalesScalarRelationFilter, SalesWhereInput>
  }, "id">

  export type SalesItemOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    purchaseItemId?: SortOrderInput | SortOrder
    itemId?: SortOrder
    batchNumber?: SortOrder
    quantity?: SortOrder
    sellingPrice?: SortOrder
    totalAmount?: SortOrder
    _count?: SalesItemCountOrderByAggregateInput
    _avg?: SalesItemAvgOrderByAggregateInput
    _max?: SalesItemMaxOrderByAggregateInput
    _min?: SalesItemMinOrderByAggregateInput
    _sum?: SalesItemSumOrderByAggregateInput
  }

  export type SalesItemScalarWhereWithAggregatesInput = {
    AND?: SalesItemScalarWhereWithAggregatesInput | SalesItemScalarWhereWithAggregatesInput[]
    OR?: SalesItemScalarWhereWithAggregatesInput[]
    NOT?: SalesItemScalarWhereWithAggregatesInput | SalesItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SalesItem"> | number
    saleId?: IntWithAggregatesFilter<"SalesItem"> | number
    purchaseItemId?: IntNullableWithAggregatesFilter<"SalesItem"> | number | null
    itemId?: IntWithAggregatesFilter<"SalesItem"> | number
    batchNumber?: StringWithAggregatesFilter<"SalesItem"> | string
    quantity?: IntWithAggregatesFilter<"SalesItem"> | number
    sellingPrice?: FloatWithAggregatesFilter<"SalesItem"> | number
    totalAmount?: FloatWithAggregatesFilter<"SalesItem"> | number
  }

  export type medicineCreateInput = {
    itemCode: string
    saltName: string
    brandName: string
    manufacturer: string
    packageQuantity: number
    productForm: string
    minQuantityAlert: number
    storageCondition: string
    boxNumber?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchaseItems?: PurchaseItemCreateNestedManyWithoutMedicineInput
  }

  export type medicineUncheckedCreateInput = {
    id?: number
    itemCode: string
    saltName: string
    brandName: string
    manufacturer: string
    packageQuantity: number
    productForm: string
    minQuantityAlert: number
    storageCondition: string
    boxNumber?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchaseItems?: PurchaseItemUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type medicineUpdateInput = {
    itemCode?: StringFieldUpdateOperationsInput | string
    saltName?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    packageQuantity?: IntFieldUpdateOperationsInput | number
    productForm?: StringFieldUpdateOperationsInput | string
    minQuantityAlert?: IntFieldUpdateOperationsInput | number
    storageCondition?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItems?: PurchaseItemUpdateManyWithoutMedicineNestedInput
  }

  export type medicineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemCode?: StringFieldUpdateOperationsInput | string
    saltName?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    packageQuantity?: IntFieldUpdateOperationsInput | number
    productForm?: StringFieldUpdateOperationsInput | string
    minQuantityAlert?: IntFieldUpdateOperationsInput | number
    storageCondition?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItems?: PurchaseItemUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type medicineCreateManyInput = {
    id?: number
    itemCode: string
    saltName: string
    brandName: string
    manufacturer: string
    packageQuantity: number
    productForm: string
    minQuantityAlert: number
    storageCondition: string
    boxNumber?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type medicineUpdateManyMutationInput = {
    itemCode?: StringFieldUpdateOperationsInput | string
    saltName?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    packageQuantity?: IntFieldUpdateOperationsInput | number
    productForm?: StringFieldUpdateOperationsInput | string
    minQuantityAlert?: IntFieldUpdateOperationsInput | number
    storageCondition?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type medicineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemCode?: StringFieldUpdateOperationsInput | string
    saltName?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    packageQuantity?: IntFieldUpdateOperationsInput | number
    productForm?: StringFieldUpdateOperationsInput | string
    minQuantityAlert?: IntFieldUpdateOperationsInput | number
    storageCondition?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    supplierId: number
    purchaseDate: Date | string
    purchaseNumber: string
    notes?: string | null
    discountType?: string
    discount?: number
    subTotal?: number
    netTotal?: number
    tax?: number
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasedItems?: PurchaseItemCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    supplierId: number
    purchaseDate: Date | string
    purchaseNumber: string
    notes?: string | null
    discountType?: string
    discount?: number
    subTotal?: number
    netTotal?: number
    tax?: number
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    purchasedItems?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    supplierId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasedItems?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasedItems?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: number
    supplierId: number
    purchaseDate: Date | string
    purchaseNumber: string
    notes?: string | null
    discountType?: string
    discount?: number
    subTotal?: number
    netTotal?: number
    tax?: number
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    supplierId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateInput = {
    batchNumber: string
    expiryDate: Date | string
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutPurchasedItemsInput
    medicine: medicineCreateNestedOneWithoutPurchaseItemsInput
  }

  export type PurchaseItemUncheckedCreateInput = {
    id?: number
    purchaseId: number
    medicineId: number
    batchNumber: string
    expiryDate: Date | string
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseItemUpdateInput = {
    batchNumber?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    sellingPricePerMedicine?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    packageQuantity?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    totalMedicines?: FloatFieldUpdateOperationsInput | number
    remainingMedicines?: FloatFieldUpdateOperationsInput | number
    scheme?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutPurchasedItemsNestedInput
    medicine?: medicineUpdateOneRequiredWithoutPurchaseItemsNestedInput
  }

  export type PurchaseItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    sellingPricePerMedicine?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    packageQuantity?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    totalMedicines?: FloatFieldUpdateOperationsInput | number
    remainingMedicines?: FloatFieldUpdateOperationsInput | number
    scheme?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateManyInput = {
    id?: number
    purchaseId: number
    medicineId: number
    batchNumber: string
    expiryDate: Date | string
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseItemUpdateManyMutationInput = {
    batchNumber?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    sellingPricePerMedicine?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    packageQuantity?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    totalMedicines?: FloatFieldUpdateOperationsInput | number
    remainingMedicines?: FloatFieldUpdateOperationsInput | number
    scheme?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    sellingPricePerMedicine?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    packageQuantity?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    totalMedicines?: FloatFieldUpdateOperationsInput | number
    remainingMedicines?: FloatFieldUpdateOperationsInput | number
    scheme?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    companyName: string
    contactPerson: string
    contact: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    companyName: string
    contactPerson: string
    contact: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateManyInput = {
    id?: number
    companyName: string
    contactPerson: string
    contact: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxCreateInput = {
    taxName: string
    percentage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxUncheckedCreateInput = {
    id?: number
    taxName: string
    percentage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxUpdateInput = {
    taxName?: StringFieldUpdateOperationsInput | string
    percentage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxName?: StringFieldUpdateOperationsInput | string
    percentage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxCreateManyInput = {
    id?: number
    taxName: string
    percentage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaxUpdateManyMutationInput = {
    taxName?: StringFieldUpdateOperationsInput | string
    percentage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxName?: StringFieldUpdateOperationsInput | string
    percentage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    salesNumber: string
    patientId?: number | null
    patientName?: string | null
    patientContact?: string | null
    patientAddress?: string | null
    subTotal?: number
    netTotal?: number
    discount?: number
    discountType?: string
    deliveryCharge?: number
    items?: SalesItemCreateNestedManyWithoutSaleInput
  }

  export type SalesUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salesNumber: string
    patientId?: number | null
    patientName?: string | null
    patientContact?: string | null
    patientAddress?: string | null
    subTotal?: number
    netTotal?: number
    discount?: number
    discountType?: string
    deliveryCharge?: number
    items?: SalesItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SalesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesNumber?: StringFieldUpdateOperationsInput | string
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    patientContact?: NullableStringFieldUpdateOperationsInput | string | null
    patientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    discountType?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    items?: SalesItemUpdateManyWithoutSaleNestedInput
  }

  export type SalesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesNumber?: StringFieldUpdateOperationsInput | string
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    patientContact?: NullableStringFieldUpdateOperationsInput | string | null
    patientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    discountType?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    items?: SalesItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SalesCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salesNumber: string
    patientId?: number | null
    patientName?: string | null
    patientContact?: string | null
    patientAddress?: string | null
    subTotal?: number
    netTotal?: number
    discount?: number
    discountType?: string
    deliveryCharge?: number
  }

  export type SalesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesNumber?: StringFieldUpdateOperationsInput | string
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    patientContact?: NullableStringFieldUpdateOperationsInput | string | null
    patientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    discountType?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesNumber?: StringFieldUpdateOperationsInput | string
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    patientContact?: NullableStringFieldUpdateOperationsInput | string | null
    patientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    discountType?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesItemCreateInput = {
    purchaseItemId?: number | null
    itemId: number
    batchNumber: string
    quantity: number
    sellingPrice: number
    totalAmount: number
    sale: SalesCreateNestedOneWithoutItemsInput
  }

  export type SalesItemUncheckedCreateInput = {
    id?: number
    saleId: number
    purchaseItemId?: number | null
    itemId: number
    batchNumber: string
    quantity: number
    sellingPrice: number
    totalAmount: number
  }

  export type SalesItemUpdateInput = {
    purchaseItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    sale?: SalesUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SalesItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
    purchaseItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesItemCreateManyInput = {
    id?: number
    saleId: number
    purchaseItemId?: number | null
    itemId: number
    batchNumber: string
    quantity: number
    sellingPrice: number
    totalAmount: number
  }

  export type SalesItemUpdateManyMutationInput = {
    purchaseItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
    purchaseItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PurchaseItemListRelationFilter = {
    every?: PurchaseItemWhereInput
    some?: PurchaseItemWhereInput
    none?: PurchaseItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type medicineCountOrderByAggregateInput = {
    id?: SortOrder
    itemCode?: SortOrder
    saltName?: SortOrder
    brandName?: SortOrder
    manufacturer?: SortOrder
    packageQuantity?: SortOrder
    productForm?: SortOrder
    minQuantityAlert?: SortOrder
    storageCondition?: SortOrder
    boxNumber?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type medicineAvgOrderByAggregateInput = {
    id?: SortOrder
    packageQuantity?: SortOrder
    minQuantityAlert?: SortOrder
    boxNumber?: SortOrder
  }

  export type medicineMaxOrderByAggregateInput = {
    id?: SortOrder
    itemCode?: SortOrder
    saltName?: SortOrder
    brandName?: SortOrder
    manufacturer?: SortOrder
    packageQuantity?: SortOrder
    productForm?: SortOrder
    minQuantityAlert?: SortOrder
    storageCondition?: SortOrder
    boxNumber?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type medicineMinOrderByAggregateInput = {
    id?: SortOrder
    itemCode?: SortOrder
    saltName?: SortOrder
    brandName?: SortOrder
    manufacturer?: SortOrder
    packageQuantity?: SortOrder
    productForm?: SortOrder
    minQuantityAlert?: SortOrder
    storageCondition?: SortOrder
    boxNumber?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type medicineSumOrderByAggregateInput = {
    id?: SortOrder
    packageQuantity?: SortOrder
    minQuantityAlert?: SortOrder
    boxNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    purchaseDate?: SortOrder
    purchaseNumber?: SortOrder
    notes?: SortOrder
    discountType?: SortOrder
    discount?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    discount?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    purchaseDate?: SortOrder
    purchaseNumber?: SortOrder
    notes?: SortOrder
    discountType?: SortOrder
    discount?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    purchaseDate?: SortOrder
    purchaseNumber?: SortOrder
    notes?: SortOrder
    discountType?: SortOrder
    discount?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    discount?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PurchaseScalarRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type MedicineScalarRelationFilter = {
    is?: medicineWhereInput
    isNot?: medicineWhereInput
  }

  export type PurchaseItemCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    medicineId?: SortOrder
    batchNumber?: SortOrder
    expiryDate?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    sellingPricePerMedicine?: SortOrder
    quantity?: SortOrder
    packageQuantity?: SortOrder
    profit?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    totalMedicines?: SortOrder
    remainingMedicines?: SortOrder
    scheme?: SortOrder
    isSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseItemAvgOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    medicineId?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    sellingPricePerMedicine?: SortOrder
    quantity?: SortOrder
    packageQuantity?: SortOrder
    profit?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    totalMedicines?: SortOrder
    remainingMedicines?: SortOrder
    scheme?: SortOrder
  }

  export type PurchaseItemMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    medicineId?: SortOrder
    batchNumber?: SortOrder
    expiryDate?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    sellingPricePerMedicine?: SortOrder
    quantity?: SortOrder
    packageQuantity?: SortOrder
    profit?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    totalMedicines?: SortOrder
    remainingMedicines?: SortOrder
    scheme?: SortOrder
    isSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseItemMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    medicineId?: SortOrder
    batchNumber?: SortOrder
    expiryDate?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    sellingPricePerMedicine?: SortOrder
    quantity?: SortOrder
    packageQuantity?: SortOrder
    profit?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    totalMedicines?: SortOrder
    remainingMedicines?: SortOrder
    scheme?: SortOrder
    isSold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseItemSumOrderByAggregateInput = {
    id?: SortOrder
    purchaseId?: SortOrder
    medicineId?: SortOrder
    purchasePrice?: SortOrder
    sellingPrice?: SortOrder
    sellingPricePerMedicine?: SortOrder
    quantity?: SortOrder
    packageQuantity?: SortOrder
    profit?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    totalMedicines?: SortOrder
    remainingMedicines?: SortOrder
    scheme?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    contactPerson?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    contactPerson?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    contactPerson?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaxCountOrderByAggregateInput = {
    id?: SortOrder
    taxName?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaxMaxOrderByAggregateInput = {
    id?: SortOrder
    taxName?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxMinOrderByAggregateInput = {
    id?: SortOrder
    taxName?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaxSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SalesItemListRelationFilter = {
    every?: SalesItemWhereInput
    some?: SalesItemWhereInput
    none?: SalesItemWhereInput
  }

  export type SalesItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salesNumber?: SortOrder
    patientId?: SortOrder
    patientName?: SortOrder
    patientContact?: SortOrder
    patientAddress?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    deliveryCharge?: SortOrder
  }

  export type SalesAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    discount?: SortOrder
    deliveryCharge?: SortOrder
  }

  export type SalesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salesNumber?: SortOrder
    patientId?: SortOrder
    patientName?: SortOrder
    patientContact?: SortOrder
    patientAddress?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    deliveryCharge?: SortOrder
  }

  export type SalesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salesNumber?: SortOrder
    patientId?: SortOrder
    patientName?: SortOrder
    patientContact?: SortOrder
    patientAddress?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    deliveryCharge?: SortOrder
  }

  export type SalesSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    subTotal?: SortOrder
    netTotal?: SortOrder
    discount?: SortOrder
    deliveryCharge?: SortOrder
  }

  export type SalesScalarRelationFilter = {
    is?: SalesWhereInput
    isNot?: SalesWhereInput
  }

  export type SalesItemCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    purchaseItemId?: SortOrder
    itemId?: SortOrder
    batchNumber?: SortOrder
    quantity?: SortOrder
    sellingPrice?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesItemAvgOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    purchaseItemId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    sellingPrice?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesItemMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    purchaseItemId?: SortOrder
    itemId?: SortOrder
    batchNumber?: SortOrder
    quantity?: SortOrder
    sellingPrice?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesItemMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    purchaseItemId?: SortOrder
    itemId?: SortOrder
    batchNumber?: SortOrder
    quantity?: SortOrder
    sellingPrice?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesItemSumOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    purchaseItemId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    sellingPrice?: SortOrder
    totalAmount?: SortOrder
  }

  export type PurchaseItemCreateNestedManyWithoutMedicineInput = {
    create?: XOR<PurchaseItemCreateWithoutMedicineInput, PurchaseItemUncheckedCreateWithoutMedicineInput> | PurchaseItemCreateWithoutMedicineInput[] | PurchaseItemUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutMedicineInput | PurchaseItemCreateOrConnectWithoutMedicineInput[]
    createMany?: PurchaseItemCreateManyMedicineInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type PurchaseItemUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<PurchaseItemCreateWithoutMedicineInput, PurchaseItemUncheckedCreateWithoutMedicineInput> | PurchaseItemCreateWithoutMedicineInput[] | PurchaseItemUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutMedicineInput | PurchaseItemCreateOrConnectWithoutMedicineInput[]
    createMany?: PurchaseItemCreateManyMedicineInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PurchaseItemUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutMedicineInput, PurchaseItemUncheckedCreateWithoutMedicineInput> | PurchaseItemCreateWithoutMedicineInput[] | PurchaseItemUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutMedicineInput | PurchaseItemCreateOrConnectWithoutMedicineInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutMedicineInput | PurchaseItemUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: PurchaseItemCreateManyMedicineInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutMedicineInput | PurchaseItemUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutMedicineInput | PurchaseItemUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type PurchaseItemUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutMedicineInput, PurchaseItemUncheckedCreateWithoutMedicineInput> | PurchaseItemCreateWithoutMedicineInput[] | PurchaseItemUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutMedicineInput | PurchaseItemCreateOrConnectWithoutMedicineInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutMedicineInput | PurchaseItemUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: PurchaseItemCreateManyMedicineInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutMedicineInput | PurchaseItemUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutMedicineInput | PurchaseItemUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type PurchaseItemCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseItemUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutPurchaseInput | PurchaseItemUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutPurchaseInput | PurchaseItemUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type PurchaseCreateNestedOneWithoutPurchasedItemsInput = {
    create?: XOR<PurchaseCreateWithoutPurchasedItemsInput, PurchaseUncheckedCreateWithoutPurchasedItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPurchasedItemsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type medicineCreateNestedOneWithoutPurchaseItemsInput = {
    create?: XOR<medicineCreateWithoutPurchaseItemsInput, medicineUncheckedCreateWithoutPurchaseItemsInput>
    connectOrCreate?: medicineCreateOrConnectWithoutPurchaseItemsInput
    connect?: medicineWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PurchaseUpdateOneRequiredWithoutPurchasedItemsNestedInput = {
    create?: XOR<PurchaseCreateWithoutPurchasedItemsInput, PurchaseUncheckedCreateWithoutPurchasedItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPurchasedItemsInput
    upsert?: PurchaseUpsertWithoutPurchasedItemsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutPurchasedItemsInput, PurchaseUpdateWithoutPurchasedItemsInput>, PurchaseUncheckedUpdateWithoutPurchasedItemsInput>
  }

  export type medicineUpdateOneRequiredWithoutPurchaseItemsNestedInput = {
    create?: XOR<medicineCreateWithoutPurchaseItemsInput, medicineUncheckedCreateWithoutPurchaseItemsInput>
    connectOrCreate?: medicineCreateOrConnectWithoutPurchaseItemsInput
    upsert?: medicineUpsertWithoutPurchaseItemsInput
    connect?: medicineWhereUniqueInput
    update?: XOR<XOR<medicineUpdateToOneWithWhereWithoutPurchaseItemsInput, medicineUpdateWithoutPurchaseItemsInput>, medicineUncheckedUpdateWithoutPurchaseItemsInput>
  }

  export type SalesItemCreateNestedManyWithoutSaleInput = {
    create?: XOR<SalesItemCreateWithoutSaleInput, SalesItemUncheckedCreateWithoutSaleInput> | SalesItemCreateWithoutSaleInput[] | SalesItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalesItemCreateOrConnectWithoutSaleInput | SalesItemCreateOrConnectWithoutSaleInput[]
    createMany?: SalesItemCreateManySaleInputEnvelope
    connect?: SalesItemWhereUniqueInput | SalesItemWhereUniqueInput[]
  }

  export type SalesItemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SalesItemCreateWithoutSaleInput, SalesItemUncheckedCreateWithoutSaleInput> | SalesItemCreateWithoutSaleInput[] | SalesItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalesItemCreateOrConnectWithoutSaleInput | SalesItemCreateOrConnectWithoutSaleInput[]
    createMany?: SalesItemCreateManySaleInputEnvelope
    connect?: SalesItemWhereUniqueInput | SalesItemWhereUniqueInput[]
  }

  export type SalesItemUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SalesItemCreateWithoutSaleInput, SalesItemUncheckedCreateWithoutSaleInput> | SalesItemCreateWithoutSaleInput[] | SalesItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalesItemCreateOrConnectWithoutSaleInput | SalesItemCreateOrConnectWithoutSaleInput[]
    upsert?: SalesItemUpsertWithWhereUniqueWithoutSaleInput | SalesItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SalesItemCreateManySaleInputEnvelope
    set?: SalesItemWhereUniqueInput | SalesItemWhereUniqueInput[]
    disconnect?: SalesItemWhereUniqueInput | SalesItemWhereUniqueInput[]
    delete?: SalesItemWhereUniqueInput | SalesItemWhereUniqueInput[]
    connect?: SalesItemWhereUniqueInput | SalesItemWhereUniqueInput[]
    update?: SalesItemUpdateWithWhereUniqueWithoutSaleInput | SalesItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SalesItemUpdateManyWithWhereWithoutSaleInput | SalesItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SalesItemScalarWhereInput | SalesItemScalarWhereInput[]
  }

  export type SalesItemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SalesItemCreateWithoutSaleInput, SalesItemUncheckedCreateWithoutSaleInput> | SalesItemCreateWithoutSaleInput[] | SalesItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SalesItemCreateOrConnectWithoutSaleInput | SalesItemCreateOrConnectWithoutSaleInput[]
    upsert?: SalesItemUpsertWithWhereUniqueWithoutSaleInput | SalesItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SalesItemCreateManySaleInputEnvelope
    set?: SalesItemWhereUniqueInput | SalesItemWhereUniqueInput[]
    disconnect?: SalesItemWhereUniqueInput | SalesItemWhereUniqueInput[]
    delete?: SalesItemWhereUniqueInput | SalesItemWhereUniqueInput[]
    connect?: SalesItemWhereUniqueInput | SalesItemWhereUniqueInput[]
    update?: SalesItemUpdateWithWhereUniqueWithoutSaleInput | SalesItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SalesItemUpdateManyWithWhereWithoutSaleInput | SalesItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SalesItemScalarWhereInput | SalesItemScalarWhereInput[]
  }

  export type SalesCreateNestedOneWithoutItemsInput = {
    create?: XOR<SalesCreateWithoutItemsInput, SalesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SalesCreateOrConnectWithoutItemsInput
    connect?: SalesWhereUniqueInput
  }

  export type SalesUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SalesCreateWithoutItemsInput, SalesUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SalesCreateOrConnectWithoutItemsInput
    upsert?: SalesUpsertWithoutItemsInput
    connect?: SalesWhereUniqueInput
    update?: XOR<XOR<SalesUpdateToOneWithWhereWithoutItemsInput, SalesUpdateWithoutItemsInput>, SalesUncheckedUpdateWithoutItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PurchaseItemCreateWithoutMedicineInput = {
    batchNumber: string
    expiryDate: Date | string
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutPurchasedItemsInput
  }

  export type PurchaseItemUncheckedCreateWithoutMedicineInput = {
    id?: number
    purchaseId: number
    batchNumber: string
    expiryDate: Date | string
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseItemCreateOrConnectWithoutMedicineInput = {
    where: PurchaseItemWhereUniqueInput
    create: XOR<PurchaseItemCreateWithoutMedicineInput, PurchaseItemUncheckedCreateWithoutMedicineInput>
  }

  export type PurchaseItemCreateManyMedicineInputEnvelope = {
    data: PurchaseItemCreateManyMedicineInput | PurchaseItemCreateManyMedicineInput[]
  }

  export type PurchaseItemUpsertWithWhereUniqueWithoutMedicineInput = {
    where: PurchaseItemWhereUniqueInput
    update: XOR<PurchaseItemUpdateWithoutMedicineInput, PurchaseItemUncheckedUpdateWithoutMedicineInput>
    create: XOR<PurchaseItemCreateWithoutMedicineInput, PurchaseItemUncheckedCreateWithoutMedicineInput>
  }

  export type PurchaseItemUpdateWithWhereUniqueWithoutMedicineInput = {
    where: PurchaseItemWhereUniqueInput
    data: XOR<PurchaseItemUpdateWithoutMedicineInput, PurchaseItemUncheckedUpdateWithoutMedicineInput>
  }

  export type PurchaseItemUpdateManyWithWhereWithoutMedicineInput = {
    where: PurchaseItemScalarWhereInput
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyWithoutMedicineInput>
  }

  export type PurchaseItemScalarWhereInput = {
    AND?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
    OR?: PurchaseItemScalarWhereInput[]
    NOT?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
    id?: IntFilter<"PurchaseItem"> | number
    purchaseId?: IntFilter<"PurchaseItem"> | number
    medicineId?: IntFilter<"PurchaseItem"> | number
    batchNumber?: StringFilter<"PurchaseItem"> | string
    expiryDate?: DateTimeFilter<"PurchaseItem"> | Date | string
    purchasePrice?: FloatFilter<"PurchaseItem"> | number
    sellingPrice?: FloatFilter<"PurchaseItem"> | number
    sellingPricePerMedicine?: FloatFilter<"PurchaseItem"> | number
    quantity?: IntFilter<"PurchaseItem"> | number
    packageQuantity?: FloatFilter<"PurchaseItem"> | number
    profit?: FloatFilter<"PurchaseItem"> | number
    tax?: FloatFilter<"PurchaseItem"> | number
    total?: FloatFilter<"PurchaseItem"> | number
    totalMedicines?: FloatFilter<"PurchaseItem"> | number
    remainingMedicines?: FloatFilter<"PurchaseItem"> | number
    scheme?: FloatFilter<"PurchaseItem"> | number
    isSold?: BoolFilter<"PurchaseItem"> | boolean
    createdAt?: DateTimeFilter<"PurchaseItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseItem"> | Date | string
  }

  export type PurchaseItemCreateWithoutPurchaseInput = {
    batchNumber: string
    expiryDate: Date | string
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medicine: medicineCreateNestedOneWithoutPurchaseItemsInput
  }

  export type PurchaseItemUncheckedCreateWithoutPurchaseInput = {
    id?: number
    medicineId: number
    batchNumber: string
    expiryDate: Date | string
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseItemCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    create: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseItemCreateManyPurchaseInputEnvelope = {
    data: PurchaseItemCreateManyPurchaseInput | PurchaseItemCreateManyPurchaseInput[]
  }

  export type PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    update: XOR<PurchaseItemUpdateWithoutPurchaseInput, PurchaseItemUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    data: XOR<PurchaseItemUpdateWithoutPurchaseInput, PurchaseItemUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchaseItemUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchaseItemScalarWhereInput
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type PurchaseCreateWithoutPurchasedItemsInput = {
    supplierId: number
    purchaseDate: Date | string
    purchaseNumber: string
    notes?: string | null
    discountType?: string
    discount?: number
    subTotal?: number
    netTotal?: number
    tax?: number
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUncheckedCreateWithoutPurchasedItemsInput = {
    id?: number
    supplierId: number
    purchaseDate: Date | string
    purchaseNumber: string
    notes?: string | null
    discountType?: string
    discount?: number
    subTotal?: number
    netTotal?: number
    tax?: number
    total?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutPurchasedItemsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutPurchasedItemsInput, PurchaseUncheckedCreateWithoutPurchasedItemsInput>
  }

  export type medicineCreateWithoutPurchaseItemsInput = {
    itemCode: string
    saltName: string
    brandName: string
    manufacturer: string
    packageQuantity: number
    productForm: string
    minQuantityAlert: number
    storageCondition: string
    boxNumber?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type medicineUncheckedCreateWithoutPurchaseItemsInput = {
    id?: number
    itemCode: string
    saltName: string
    brandName: string
    manufacturer: string
    packageQuantity: number
    productForm: string
    minQuantityAlert: number
    storageCondition: string
    boxNumber?: number | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type medicineCreateOrConnectWithoutPurchaseItemsInput = {
    where: medicineWhereUniqueInput
    create: XOR<medicineCreateWithoutPurchaseItemsInput, medicineUncheckedCreateWithoutPurchaseItemsInput>
  }

  export type PurchaseUpsertWithoutPurchasedItemsInput = {
    update: XOR<PurchaseUpdateWithoutPurchasedItemsInput, PurchaseUncheckedUpdateWithoutPurchasedItemsInput>
    create: XOR<PurchaseCreateWithoutPurchasedItemsInput, PurchaseUncheckedCreateWithoutPurchasedItemsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutPurchasedItemsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutPurchasedItemsInput, PurchaseUncheckedUpdateWithoutPurchasedItemsInput>
  }

  export type PurchaseUpdateWithoutPurchasedItemsInput = {
    supplierId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateWithoutPurchasedItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    discountType?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type medicineUpsertWithoutPurchaseItemsInput = {
    update: XOR<medicineUpdateWithoutPurchaseItemsInput, medicineUncheckedUpdateWithoutPurchaseItemsInput>
    create: XOR<medicineCreateWithoutPurchaseItemsInput, medicineUncheckedCreateWithoutPurchaseItemsInput>
    where?: medicineWhereInput
  }

  export type medicineUpdateToOneWithWhereWithoutPurchaseItemsInput = {
    where?: medicineWhereInput
    data: XOR<medicineUpdateWithoutPurchaseItemsInput, medicineUncheckedUpdateWithoutPurchaseItemsInput>
  }

  export type medicineUpdateWithoutPurchaseItemsInput = {
    itemCode?: StringFieldUpdateOperationsInput | string
    saltName?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    packageQuantity?: IntFieldUpdateOperationsInput | number
    productForm?: StringFieldUpdateOperationsInput | string
    minQuantityAlert?: IntFieldUpdateOperationsInput | number
    storageCondition?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type medicineUncheckedUpdateWithoutPurchaseItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemCode?: StringFieldUpdateOperationsInput | string
    saltName?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    packageQuantity?: IntFieldUpdateOperationsInput | number
    productForm?: StringFieldUpdateOperationsInput | string
    minQuantityAlert?: IntFieldUpdateOperationsInput | number
    storageCondition?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesItemCreateWithoutSaleInput = {
    purchaseItemId?: number | null
    itemId: number
    batchNumber: string
    quantity: number
    sellingPrice: number
    totalAmount: number
  }

  export type SalesItemUncheckedCreateWithoutSaleInput = {
    id?: number
    purchaseItemId?: number | null
    itemId: number
    batchNumber: string
    quantity: number
    sellingPrice: number
    totalAmount: number
  }

  export type SalesItemCreateOrConnectWithoutSaleInput = {
    where: SalesItemWhereUniqueInput
    create: XOR<SalesItemCreateWithoutSaleInput, SalesItemUncheckedCreateWithoutSaleInput>
  }

  export type SalesItemCreateManySaleInputEnvelope = {
    data: SalesItemCreateManySaleInput | SalesItemCreateManySaleInput[]
  }

  export type SalesItemUpsertWithWhereUniqueWithoutSaleInput = {
    where: SalesItemWhereUniqueInput
    update: XOR<SalesItemUpdateWithoutSaleInput, SalesItemUncheckedUpdateWithoutSaleInput>
    create: XOR<SalesItemCreateWithoutSaleInput, SalesItemUncheckedCreateWithoutSaleInput>
  }

  export type SalesItemUpdateWithWhereUniqueWithoutSaleInput = {
    where: SalesItemWhereUniqueInput
    data: XOR<SalesItemUpdateWithoutSaleInput, SalesItemUncheckedUpdateWithoutSaleInput>
  }

  export type SalesItemUpdateManyWithWhereWithoutSaleInput = {
    where: SalesItemScalarWhereInput
    data: XOR<SalesItemUpdateManyMutationInput, SalesItemUncheckedUpdateManyWithoutSaleInput>
  }

  export type SalesItemScalarWhereInput = {
    AND?: SalesItemScalarWhereInput | SalesItemScalarWhereInput[]
    OR?: SalesItemScalarWhereInput[]
    NOT?: SalesItemScalarWhereInput | SalesItemScalarWhereInput[]
    id?: IntFilter<"SalesItem"> | number
    saleId?: IntFilter<"SalesItem"> | number
    purchaseItemId?: IntNullableFilter<"SalesItem"> | number | null
    itemId?: IntFilter<"SalesItem"> | number
    batchNumber?: StringFilter<"SalesItem"> | string
    quantity?: IntFilter<"SalesItem"> | number
    sellingPrice?: FloatFilter<"SalesItem"> | number
    totalAmount?: FloatFilter<"SalesItem"> | number
  }

  export type SalesCreateWithoutItemsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    salesNumber: string
    patientId?: number | null
    patientName?: string | null
    patientContact?: string | null
    patientAddress?: string | null
    subTotal?: number
    netTotal?: number
    discount?: number
    discountType?: string
    deliveryCharge?: number
  }

  export type SalesUncheckedCreateWithoutItemsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    salesNumber: string
    patientId?: number | null
    patientName?: string | null
    patientContact?: string | null
    patientAddress?: string | null
    subTotal?: number
    netTotal?: number
    discount?: number
    discountType?: string
    deliveryCharge?: number
  }

  export type SalesCreateOrConnectWithoutItemsInput = {
    where: SalesWhereUniqueInput
    create: XOR<SalesCreateWithoutItemsInput, SalesUncheckedCreateWithoutItemsInput>
  }

  export type SalesUpsertWithoutItemsInput = {
    update: XOR<SalesUpdateWithoutItemsInput, SalesUncheckedUpdateWithoutItemsInput>
    create: XOR<SalesCreateWithoutItemsInput, SalesUncheckedCreateWithoutItemsInput>
    where?: SalesWhereInput
  }

  export type SalesUpdateToOneWithWhereWithoutItemsInput = {
    where?: SalesWhereInput
    data: XOR<SalesUpdateWithoutItemsInput, SalesUncheckedUpdateWithoutItemsInput>
  }

  export type SalesUpdateWithoutItemsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesNumber?: StringFieldUpdateOperationsInput | string
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    patientContact?: NullableStringFieldUpdateOperationsInput | string | null
    patientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    discountType?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesNumber?: StringFieldUpdateOperationsInput | string
    patientId?: NullableIntFieldUpdateOperationsInput | number | null
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    patientContact?: NullableStringFieldUpdateOperationsInput | string | null
    patientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    netTotal?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    discountType?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchaseItemCreateManyMedicineInput = {
    id?: number
    purchaseId: number
    batchNumber: string
    expiryDate: Date | string
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseItemUpdateWithoutMedicineInput = {
    batchNumber?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    sellingPricePerMedicine?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    packageQuantity?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    totalMedicines?: FloatFieldUpdateOperationsInput | number
    remainingMedicines?: FloatFieldUpdateOperationsInput | number
    scheme?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutPurchasedItemsNestedInput
  }

  export type PurchaseItemUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    sellingPricePerMedicine?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    packageQuantity?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    totalMedicines?: FloatFieldUpdateOperationsInput | number
    remainingMedicines?: FloatFieldUpdateOperationsInput | number
    scheme?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    sellingPricePerMedicine?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    packageQuantity?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    totalMedicines?: FloatFieldUpdateOperationsInput | number
    remainingMedicines?: FloatFieldUpdateOperationsInput | number
    scheme?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateManyPurchaseInput = {
    id?: number
    medicineId: number
    batchNumber: string
    expiryDate: Date | string
    purchasePrice: number
    sellingPrice: number
    sellingPricePerMedicine: number
    quantity: number
    packageQuantity: number
    profit: number
    tax: number
    total: number
    totalMedicines: number
    remainingMedicines: number
    scheme: number
    isSold?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseItemUpdateWithoutPurchaseInput = {
    batchNumber?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    sellingPricePerMedicine?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    packageQuantity?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    totalMedicines?: FloatFieldUpdateOperationsInput | number
    remainingMedicines?: FloatFieldUpdateOperationsInput | number
    scheme?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: medicineUpdateOneRequiredWithoutPurchaseItemsNestedInput
  }

  export type PurchaseItemUncheckedUpdateWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    sellingPricePerMedicine?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    packageQuantity?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    totalMedicines?: FloatFieldUpdateOperationsInput | number
    remainingMedicines?: FloatFieldUpdateOperationsInput | number
    scheme?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemUncheckedUpdateManyWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    purchasePrice?: FloatFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    sellingPricePerMedicine?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    packageQuantity?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    totalMedicines?: FloatFieldUpdateOperationsInput | number
    remainingMedicines?: FloatFieldUpdateOperationsInput | number
    scheme?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesItemCreateManySaleInput = {
    id?: number
    purchaseItemId?: number | null
    itemId: number
    batchNumber: string
    quantity: number
    sellingPrice: number
    totalAmount: number
  }

  export type SalesItemUpdateWithoutSaleInput = {
    purchaseItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesItemUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesItemUncheckedUpdateManyWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseItemId?: NullableIntFieldUpdateOperationsInput | number | null
    itemId?: IntFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    sellingPrice?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}