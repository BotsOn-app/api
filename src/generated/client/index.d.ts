
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = {
  id: string
  name: string
  avatarUrl: string
}

/**
 * Model Extensions
 * 
 */
export type Extensions = {
  id: string
  authorId: string
  version: string
  downloads: number
  bannerUrl: string
  name: string
  description: string
  verified: boolean
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.extensions`: Exposes CRUD operations for the **Extensions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extensions
    * const extensions = await prisma.extensions.findMany()
    * ```
    */
  get extensions(): Prisma.ExtensionsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Extensions: 'Extensions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    Extensions: number
  }

  export type UsersCountOutputTypeSelect = {
    Extensions?: boolean
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    avatarUrl: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatarUrl: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    avatarUrl: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    name: string
    avatarUrl: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect = {
    id?: boolean
    name?: boolean
    avatarUrl?: boolean
    Extensions?: boolean | Users$ExtensionsArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type UsersInclude = {
    Extensions?: boolean | Users$ExtensionsArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }

  export type UsersGetPayload<S extends boolean | null | undefined | UsersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Users :
    S extends undefined ? never :
    S extends { include: any } & (UsersArgs | UsersFindManyArgs)
    ? Users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Extensions' ? Array < ExtensionsGetPayload<S['include'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UsersArgs | UsersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Extensions' ? Array < ExtensionsGetPayload<S['select'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Users ? Users[P] : never
  } 
      : Users


  type UsersCountArgs = 
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): Prisma.PrismaPromise<Array<UsersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Extensions<T extends Users$ExtensionsArgs= {}>(args?: Subset<T, Users$ExtensionsArgs>): Prisma.PrismaPromise<Array<ExtensionsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Users base type for findUnique actions
   */
  export type UsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUnique
   */
  export interface UsersFindUniqueArgs extends UsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users base type for findFirst actions
   */
  export type UsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * Users findFirst
   */
  export interface UsersFindFirstArgs extends UsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users.Extensions
   */
  export type Users$ExtensionsArgs = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
    where?: ExtensionsWhereInput
    orderBy?: Enumerable<ExtensionsOrderByWithRelationInput>
    cursor?: ExtensionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExtensionsScalarFieldEnum>
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
  }



  /**
   * Model Extensions
   */


  export type AggregateExtensions = {
    _count: ExtensionsCountAggregateOutputType | null
    _avg: ExtensionsAvgAggregateOutputType | null
    _sum: ExtensionsSumAggregateOutputType | null
    _min: ExtensionsMinAggregateOutputType | null
    _max: ExtensionsMaxAggregateOutputType | null
  }

  export type ExtensionsAvgAggregateOutputType = {
    downloads: number | null
  }

  export type ExtensionsSumAggregateOutputType = {
    downloads: number | null
  }

  export type ExtensionsMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    version: string | null
    downloads: number | null
    bannerUrl: string | null
    name: string | null
    description: string | null
    verified: boolean | null
  }

  export type ExtensionsMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    version: string | null
    downloads: number | null
    bannerUrl: string | null
    name: string | null
    description: string | null
    verified: boolean | null
  }

  export type ExtensionsCountAggregateOutputType = {
    id: number
    authorId: number
    version: number
    downloads: number
    bannerUrl: number
    name: number
    description: number
    verified: number
    _all: number
  }


  export type ExtensionsAvgAggregateInputType = {
    downloads?: true
  }

  export type ExtensionsSumAggregateInputType = {
    downloads?: true
  }

  export type ExtensionsMinAggregateInputType = {
    id?: true
    authorId?: true
    version?: true
    downloads?: true
    bannerUrl?: true
    name?: true
    description?: true
    verified?: true
  }

  export type ExtensionsMaxAggregateInputType = {
    id?: true
    authorId?: true
    version?: true
    downloads?: true
    bannerUrl?: true
    name?: true
    description?: true
    verified?: true
  }

  export type ExtensionsCountAggregateInputType = {
    id?: true
    authorId?: true
    version?: true
    downloads?: true
    bannerUrl?: true
    name?: true
    description?: true
    verified?: true
    _all?: true
  }

  export type ExtensionsAggregateArgs = {
    /**
     * Filter which Extensions to aggregate.
     */
    where?: ExtensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extensions to fetch.
     */
    orderBy?: Enumerable<ExtensionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExtensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Extensions
    **/
    _count?: true | ExtensionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtensionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtensionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtensionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtensionsMaxAggregateInputType
  }

  export type GetExtensionsAggregateType<T extends ExtensionsAggregateArgs> = {
        [P in keyof T & keyof AggregateExtensions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtensions[P]>
      : GetScalarType<T[P], AggregateExtensions[P]>
  }




  export type ExtensionsGroupByArgs = {
    where?: ExtensionsWhereInput
    orderBy?: Enumerable<ExtensionsOrderByWithAggregationInput>
    by: ExtensionsScalarFieldEnum[]
    having?: ExtensionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtensionsCountAggregateInputType | true
    _avg?: ExtensionsAvgAggregateInputType
    _sum?: ExtensionsSumAggregateInputType
    _min?: ExtensionsMinAggregateInputType
    _max?: ExtensionsMaxAggregateInputType
  }


  export type ExtensionsGroupByOutputType = {
    id: string
    authorId: string
    version: string
    downloads: number
    bannerUrl: string
    name: string
    description: string
    verified: boolean
    _count: ExtensionsCountAggregateOutputType | null
    _avg: ExtensionsAvgAggregateOutputType | null
    _sum: ExtensionsSumAggregateOutputType | null
    _min: ExtensionsMinAggregateOutputType | null
    _max: ExtensionsMaxAggregateOutputType | null
  }

  type GetExtensionsGroupByPayload<T extends ExtensionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExtensionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtensionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtensionsGroupByOutputType[P]>
            : GetScalarType<T[P], ExtensionsGroupByOutputType[P]>
        }
      >
    >


  export type ExtensionsSelect = {
    id?: boolean
    authorId?: boolean
    version?: boolean
    downloads?: boolean
    bannerUrl?: boolean
    name?: boolean
    description?: boolean
    verified?: boolean
    author?: boolean | UsersArgs
  }


  export type ExtensionsInclude = {
    author?: boolean | UsersArgs
  }

  export type ExtensionsGetPayload<S extends boolean | null | undefined | ExtensionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Extensions :
    S extends undefined ? never :
    S extends { include: any } & (ExtensionsArgs | ExtensionsFindManyArgs)
    ? Extensions  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UsersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExtensionsArgs | ExtensionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UsersGetPayload<S['select'][P]> :  P extends keyof Extensions ? Extensions[P] : never
  } 
      : Extensions


  type ExtensionsCountArgs = 
    Omit<ExtensionsFindManyArgs, 'select' | 'include'> & {
      select?: ExtensionsCountAggregateInputType | true
    }

  export interface ExtensionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Extensions that matches the filter.
     * @param {ExtensionsFindUniqueArgs} args - Arguments to find a Extensions
     * @example
     * // Get one Extensions
     * const extensions = await prisma.extensions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExtensionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExtensionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Extensions'> extends True ? Prisma__ExtensionsClient<ExtensionsGetPayload<T>> : Prisma__ExtensionsClient<ExtensionsGetPayload<T> | null, null>

    /**
     * Find one Extensions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExtensionsFindUniqueOrThrowArgs} args - Arguments to find a Extensions
     * @example
     * // Get one Extensions
     * const extensions = await prisma.extensions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExtensionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExtensionsFindUniqueOrThrowArgs>
    ): Prisma__ExtensionsClient<ExtensionsGetPayload<T>>

    /**
     * Find the first Extensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsFindFirstArgs} args - Arguments to find a Extensions
     * @example
     * // Get one Extensions
     * const extensions = await prisma.extensions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExtensionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExtensionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Extensions'> extends True ? Prisma__ExtensionsClient<ExtensionsGetPayload<T>> : Prisma__ExtensionsClient<ExtensionsGetPayload<T> | null, null>

    /**
     * Find the first Extensions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsFindFirstOrThrowArgs} args - Arguments to find a Extensions
     * @example
     * // Get one Extensions
     * const extensions = await prisma.extensions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExtensionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExtensionsFindFirstOrThrowArgs>
    ): Prisma__ExtensionsClient<ExtensionsGetPayload<T>>

    /**
     * Find zero or more Extensions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extensions
     * const extensions = await prisma.extensions.findMany()
     * 
     * // Get first 10 Extensions
     * const extensions = await prisma.extensions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const extensionsWithIdOnly = await prisma.extensions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExtensionsFindManyArgs>(
      args?: SelectSubset<T, ExtensionsFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExtensionsGetPayload<T>>>

    /**
     * Create a Extensions.
     * @param {ExtensionsCreateArgs} args - Arguments to create a Extensions.
     * @example
     * // Create one Extensions
     * const Extensions = await prisma.extensions.create({
     *   data: {
     *     // ... data to create a Extensions
     *   }
     * })
     * 
    **/
    create<T extends ExtensionsCreateArgs>(
      args: SelectSubset<T, ExtensionsCreateArgs>
    ): Prisma__ExtensionsClient<ExtensionsGetPayload<T>>

    /**
     * Create many Extensions.
     *     @param {ExtensionsCreateManyArgs} args - Arguments to create many Extensions.
     *     @example
     *     // Create many Extensions
     *     const extensions = await prisma.extensions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExtensionsCreateManyArgs>(
      args?: SelectSubset<T, ExtensionsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Extensions.
     * @param {ExtensionsDeleteArgs} args - Arguments to delete one Extensions.
     * @example
     * // Delete one Extensions
     * const Extensions = await prisma.extensions.delete({
     *   where: {
     *     // ... filter to delete one Extensions
     *   }
     * })
     * 
    **/
    delete<T extends ExtensionsDeleteArgs>(
      args: SelectSubset<T, ExtensionsDeleteArgs>
    ): Prisma__ExtensionsClient<ExtensionsGetPayload<T>>

    /**
     * Update one Extensions.
     * @param {ExtensionsUpdateArgs} args - Arguments to update one Extensions.
     * @example
     * // Update one Extensions
     * const extensions = await prisma.extensions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExtensionsUpdateArgs>(
      args: SelectSubset<T, ExtensionsUpdateArgs>
    ): Prisma__ExtensionsClient<ExtensionsGetPayload<T>>

    /**
     * Delete zero or more Extensions.
     * @param {ExtensionsDeleteManyArgs} args - Arguments to filter Extensions to delete.
     * @example
     * // Delete a few Extensions
     * const { count } = await prisma.extensions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExtensionsDeleteManyArgs>(
      args?: SelectSubset<T, ExtensionsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extensions
     * const extensions = await prisma.extensions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExtensionsUpdateManyArgs>(
      args: SelectSubset<T, ExtensionsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Extensions.
     * @param {ExtensionsUpsertArgs} args - Arguments to update or create a Extensions.
     * @example
     * // Update or create a Extensions
     * const extensions = await prisma.extensions.upsert({
     *   create: {
     *     // ... data to create a Extensions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extensions we want to update
     *   }
     * })
    **/
    upsert<T extends ExtensionsUpsertArgs>(
      args: SelectSubset<T, ExtensionsUpsertArgs>
    ): Prisma__ExtensionsClient<ExtensionsGetPayload<T>>

    /**
     * Count the number of Extensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsCountArgs} args - Arguments to filter Extensions to count.
     * @example
     * // Count the number of Extensions
     * const count = await prisma.extensions.count({
     *   where: {
     *     // ... the filter for the Extensions we want to count
     *   }
     * })
    **/
    count<T extends ExtensionsCountArgs>(
      args?: Subset<T, ExtensionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtensionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExtensionsAggregateArgs>(args: Subset<T, ExtensionsAggregateArgs>): Prisma.PrismaPromise<GetExtensionsAggregateType<T>>

    /**
     * Group by Extensions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtensionsGroupByArgs} args - Group by arguments.
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
      T extends ExtensionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExtensionsGroupByArgs['orderBy'] }
        : { orderBy?: ExtensionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExtensionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtensionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Extensions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExtensionsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends UsersArgs= {}>(args?: Subset<T, UsersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Extensions base type for findUnique actions
   */
  export type ExtensionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
    /**
     * Filter, which Extensions to fetch.
     */
    where: ExtensionsWhereUniqueInput
  }

  /**
   * Extensions findUnique
   */
  export interface ExtensionsFindUniqueArgs extends ExtensionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Extensions findUniqueOrThrow
   */
  export type ExtensionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
    /**
     * Filter, which Extensions to fetch.
     */
    where: ExtensionsWhereUniqueInput
  }


  /**
   * Extensions base type for findFirst actions
   */
  export type ExtensionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
    /**
     * Filter, which Extensions to fetch.
     */
    where?: ExtensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extensions to fetch.
     */
    orderBy?: Enumerable<ExtensionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extensions.
     */
    cursor?: ExtensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extensions.
     */
    distinct?: Enumerable<ExtensionsScalarFieldEnum>
  }

  /**
   * Extensions findFirst
   */
  export interface ExtensionsFindFirstArgs extends ExtensionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Extensions findFirstOrThrow
   */
  export type ExtensionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
    /**
     * Filter, which Extensions to fetch.
     */
    where?: ExtensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extensions to fetch.
     */
    orderBy?: Enumerable<ExtensionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extensions.
     */
    cursor?: ExtensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extensions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extensions.
     */
    distinct?: Enumerable<ExtensionsScalarFieldEnum>
  }


  /**
   * Extensions findMany
   */
  export type ExtensionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
    /**
     * Filter, which Extensions to fetch.
     */
    where?: ExtensionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extensions to fetch.
     */
    orderBy?: Enumerable<ExtensionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Extensions.
     */
    cursor?: ExtensionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extensions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extensions.
     */
    skip?: number
    distinct?: Enumerable<ExtensionsScalarFieldEnum>
  }


  /**
   * Extensions create
   */
  export type ExtensionsCreateArgs = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
    /**
     * The data needed to create a Extensions.
     */
    data: XOR<ExtensionsCreateInput, ExtensionsUncheckedCreateInput>
  }


  /**
   * Extensions createMany
   */
  export type ExtensionsCreateManyArgs = {
    /**
     * The data used to create many Extensions.
     */
    data: Enumerable<ExtensionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Extensions update
   */
  export type ExtensionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
    /**
     * The data needed to update a Extensions.
     */
    data: XOR<ExtensionsUpdateInput, ExtensionsUncheckedUpdateInput>
    /**
     * Choose, which Extensions to update.
     */
    where: ExtensionsWhereUniqueInput
  }


  /**
   * Extensions updateMany
   */
  export type ExtensionsUpdateManyArgs = {
    /**
     * The data used to update Extensions.
     */
    data: XOR<ExtensionsUpdateManyMutationInput, ExtensionsUncheckedUpdateManyInput>
    /**
     * Filter which Extensions to update
     */
    where?: ExtensionsWhereInput
  }


  /**
   * Extensions upsert
   */
  export type ExtensionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
    /**
     * The filter to search for the Extensions to update in case it exists.
     */
    where: ExtensionsWhereUniqueInput
    /**
     * In case the Extensions found by the `where` argument doesn't exist, create a new Extensions with this data.
     */
    create: XOR<ExtensionsCreateInput, ExtensionsUncheckedCreateInput>
    /**
     * In case the Extensions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExtensionsUpdateInput, ExtensionsUncheckedUpdateInput>
  }


  /**
   * Extensions delete
   */
  export type ExtensionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
    /**
     * Filter which Extensions to delete.
     */
    where: ExtensionsWhereUniqueInput
  }


  /**
   * Extensions deleteMany
   */
  export type ExtensionsDeleteManyArgs = {
    /**
     * Filter which Extensions to delete
     */
    where?: ExtensionsWhereInput
  }


  /**
   * Extensions without action
   */
  export type ExtensionsArgs = {
    /**
     * Select specific fields to fetch from the Extensions
     */
    select?: ExtensionsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExtensionsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ExtensionsScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    version: 'version',
    downloads: 'downloads',
    bannerUrl: 'bannerUrl',
    name: 'name',
    description: 'description',
    verified: 'verified'
  };

  export type ExtensionsScalarFieldEnum = (typeof ExtensionsScalarFieldEnum)[keyof typeof ExtensionsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatarUrl: 'avatarUrl'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    avatarUrl?: StringFilter | string
    Extensions?: ExtensionsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    Extensions?: ExtensionsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = {
    id?: string
  }

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    avatarUrl?: StringWithAggregatesFilter | string
  }

  export type ExtensionsWhereInput = {
    AND?: Enumerable<ExtensionsWhereInput>
    OR?: Enumerable<ExtensionsWhereInput>
    NOT?: Enumerable<ExtensionsWhereInput>
    id?: StringFilter | string
    authorId?: StringFilter | string
    version?: StringFilter | string
    downloads?: IntFilter | number
    bannerUrl?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    verified?: BoolFilter | boolean
    author?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type ExtensionsOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    version?: SortOrder
    downloads?: SortOrder
    bannerUrl?: SortOrder
    name?: SortOrder
    description?: SortOrder
    verified?: SortOrder
    author?: UsersOrderByWithRelationInput
  }

  export type ExtensionsWhereUniqueInput = {
    id?: string
  }

  export type ExtensionsOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    version?: SortOrder
    downloads?: SortOrder
    bannerUrl?: SortOrder
    name?: SortOrder
    description?: SortOrder
    verified?: SortOrder
    _count?: ExtensionsCountOrderByAggregateInput
    _avg?: ExtensionsAvgOrderByAggregateInput
    _max?: ExtensionsMaxOrderByAggregateInput
    _min?: ExtensionsMinOrderByAggregateInput
    _sum?: ExtensionsSumOrderByAggregateInput
  }

  export type ExtensionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExtensionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExtensionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExtensionsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    authorId?: StringWithAggregatesFilter | string
    version?: StringWithAggregatesFilter | string
    downloads?: IntWithAggregatesFilter | number
    bannerUrl?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    verified?: BoolWithAggregatesFilter | boolean
  }

  export type UsersCreateInput = {
    id?: string
    name: string
    avatarUrl: string
    Extensions?: ExtensionsCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    name: string
    avatarUrl: string
    Extensions?: ExtensionsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    Extensions?: ExtensionsUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    Extensions?: ExtensionsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    name: string
    avatarUrl: string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ExtensionsCreateInput = {
    id?: string
    version: string
    downloads: number
    bannerUrl: string
    name: string
    description: string
    verified: boolean
    author: UsersCreateNestedOneWithoutExtensionsInput
  }

  export type ExtensionsUncheckedCreateInput = {
    id?: string
    authorId: string
    version: string
    downloads: number
    bannerUrl: string
    name: string
    description: string
    verified: boolean
  }

  export type ExtensionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    bannerUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    author?: UsersUpdateOneRequiredWithoutExtensionsNestedInput
  }

  export type ExtensionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    bannerUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExtensionsCreateManyInput = {
    id?: string
    authorId: string
    version: string
    downloads: number
    bannerUrl: string
    name: string
    description: string
    verified: boolean
  }

  export type ExtensionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    bannerUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExtensionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    bannerUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type ExtensionsListRelationFilter = {
    every?: ExtensionsWhereInput
    some?: ExtensionsWhereInput
    none?: ExtensionsWhereInput
  }

  export type ExtensionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ExtensionsCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    version?: SortOrder
    downloads?: SortOrder
    bannerUrl?: SortOrder
    name?: SortOrder
    description?: SortOrder
    verified?: SortOrder
  }

  export type ExtensionsAvgOrderByAggregateInput = {
    downloads?: SortOrder
  }

  export type ExtensionsMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    version?: SortOrder
    downloads?: SortOrder
    bannerUrl?: SortOrder
    name?: SortOrder
    description?: SortOrder
    verified?: SortOrder
  }

  export type ExtensionsMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    version?: SortOrder
    downloads?: SortOrder
    bannerUrl?: SortOrder
    name?: SortOrder
    description?: SortOrder
    verified?: SortOrder
  }

  export type ExtensionsSumOrderByAggregateInput = {
    downloads?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ExtensionsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ExtensionsCreateWithoutAuthorInput>, Enumerable<ExtensionsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ExtensionsCreateOrConnectWithoutAuthorInput>
    createMany?: ExtensionsCreateManyAuthorInputEnvelope
    connect?: Enumerable<ExtensionsWhereUniqueInput>
  }

  export type ExtensionsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ExtensionsCreateWithoutAuthorInput>, Enumerable<ExtensionsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ExtensionsCreateOrConnectWithoutAuthorInput>
    createMany?: ExtensionsCreateManyAuthorInputEnvelope
    connect?: Enumerable<ExtensionsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ExtensionsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ExtensionsCreateWithoutAuthorInput>, Enumerable<ExtensionsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ExtensionsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ExtensionsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ExtensionsCreateManyAuthorInputEnvelope
    set?: Enumerable<ExtensionsWhereUniqueInput>
    disconnect?: Enumerable<ExtensionsWhereUniqueInput>
    delete?: Enumerable<ExtensionsWhereUniqueInput>
    connect?: Enumerable<ExtensionsWhereUniqueInput>
    update?: Enumerable<ExtensionsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ExtensionsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ExtensionsScalarWhereInput>
  }

  export type ExtensionsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ExtensionsCreateWithoutAuthorInput>, Enumerable<ExtensionsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ExtensionsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ExtensionsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ExtensionsCreateManyAuthorInputEnvelope
    set?: Enumerable<ExtensionsWhereUniqueInput>
    disconnect?: Enumerable<ExtensionsWhereUniqueInput>
    delete?: Enumerable<ExtensionsWhereUniqueInput>
    connect?: Enumerable<ExtensionsWhereUniqueInput>
    update?: Enumerable<ExtensionsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ExtensionsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ExtensionsScalarWhereInput>
  }

  export type UsersCreateNestedOneWithoutExtensionsInput = {
    create?: XOR<UsersCreateWithoutExtensionsInput, UsersUncheckedCreateWithoutExtensionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutExtensionsInput
    connect?: UsersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsersUpdateOneRequiredWithoutExtensionsNestedInput = {
    create?: XOR<UsersCreateWithoutExtensionsInput, UsersUncheckedCreateWithoutExtensionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutExtensionsInput
    upsert?: UsersUpsertWithoutExtensionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutExtensionsInput, UsersUncheckedUpdateWithoutExtensionsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ExtensionsCreateWithoutAuthorInput = {
    id?: string
    version: string
    downloads: number
    bannerUrl: string
    name: string
    description: string
    verified: boolean
  }

  export type ExtensionsUncheckedCreateWithoutAuthorInput = {
    id?: string
    version: string
    downloads: number
    bannerUrl: string
    name: string
    description: string
    verified: boolean
  }

  export type ExtensionsCreateOrConnectWithoutAuthorInput = {
    where: ExtensionsWhereUniqueInput
    create: XOR<ExtensionsCreateWithoutAuthorInput, ExtensionsUncheckedCreateWithoutAuthorInput>
  }

  export type ExtensionsCreateManyAuthorInputEnvelope = {
    data: Enumerable<ExtensionsCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type ExtensionsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ExtensionsWhereUniqueInput
    update: XOR<ExtensionsUpdateWithoutAuthorInput, ExtensionsUncheckedUpdateWithoutAuthorInput>
    create: XOR<ExtensionsCreateWithoutAuthorInput, ExtensionsUncheckedCreateWithoutAuthorInput>
  }

  export type ExtensionsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ExtensionsWhereUniqueInput
    data: XOR<ExtensionsUpdateWithoutAuthorInput, ExtensionsUncheckedUpdateWithoutAuthorInput>
  }

  export type ExtensionsUpdateManyWithWhereWithoutAuthorInput = {
    where: ExtensionsScalarWhereInput
    data: XOR<ExtensionsUpdateManyMutationInput, ExtensionsUncheckedUpdateManyWithoutExtensionsInput>
  }

  export type ExtensionsScalarWhereInput = {
    AND?: Enumerable<ExtensionsScalarWhereInput>
    OR?: Enumerable<ExtensionsScalarWhereInput>
    NOT?: Enumerable<ExtensionsScalarWhereInput>
    id?: StringFilter | string
    authorId?: StringFilter | string
    version?: StringFilter | string
    downloads?: IntFilter | number
    bannerUrl?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    verified?: BoolFilter | boolean
  }

  export type UsersCreateWithoutExtensionsInput = {
    id?: string
    name: string
    avatarUrl: string
  }

  export type UsersUncheckedCreateWithoutExtensionsInput = {
    id?: string
    name: string
    avatarUrl: string
  }

  export type UsersCreateOrConnectWithoutExtensionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutExtensionsInput, UsersUncheckedCreateWithoutExtensionsInput>
  }

  export type UsersUpsertWithoutExtensionsInput = {
    update: XOR<UsersUpdateWithoutExtensionsInput, UsersUncheckedUpdateWithoutExtensionsInput>
    create: XOR<UsersCreateWithoutExtensionsInput, UsersUncheckedCreateWithoutExtensionsInput>
  }

  export type UsersUpdateWithoutExtensionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateWithoutExtensionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ExtensionsCreateManyAuthorInput = {
    id?: string
    version: string
    downloads: number
    bannerUrl: string
    name: string
    description: string
    verified: boolean
  }

  export type ExtensionsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    bannerUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExtensionsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    bannerUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExtensionsUncheckedUpdateManyWithoutExtensionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    downloads?: IntFieldUpdateOperationsInput | number
    bannerUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
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