// @generated, do not edit
/// https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto

/// The canonical error codes for gRPC APIs.


/// Sometimes multiple error codes may apply.  Services should return
/// the most specific error code that applies.  For example, prefer
/// `OUT_OF_RANGE` over `FAILED_PRECONDITION` if both codes apply.
/// Similarly prefer `NOT_FOUND` or `ALREADY_EXISTS` over `FAILED_PRECONDITION`.
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[repr(transparent)]
pub struct Code(i32);
impl Code {
  /// Not an error; returned on success

  /// HTTP Mapping: 200 OK
  pub const OK: Code = Code(0);
  /// The operation was cancelled, typically by the caller.

  /// HTTP Mapping: 499 Client Closed Request
  pub const CANCELLED: Code = Code(1);
  /// Unknown error.  For example, this error may be returned when
  /// a `Status` value received from another address space belongs to
  /// an error space that is not known in this address space.  Also
  /// errors raised by APIs that do not return enough error information
  /// may be converted to this error.

  /// HTTP Mapping: 500 Internal Server Error
  pub const UNKNOWN: Code = Code(2);
  /// The client specified an invalid argument.  Note that this differs
  /// from `FAILED_PRECONDITION`.  `INVALID_ARGUMENT` indicates arguments
  /// that are problematic regardless of the state of the system
  /// (e.g., a malformed file name).

  /// HTTP Mapping: 400 Bad Request
  pub const INVALID_ARGUMENT: Code = Code(3);
  /// The deadline expired before the operation could complete. For operations
  /// that change the state of the system, this error may be returned
  /// even if the operation has completed successfully.  For example, a
  /// successful response from a server could have been delayed long
  /// enough for the deadline to expire.

  /// HTTP Mapping: 504 Gateway Timeout
  pub const DEADLINE_EXCEEDED: Code = Code(4);
  /// Some requested entity (e.g., file or directory) was not found.

  /// Note to server developers: if a request is denied for an entire class
  /// of users, such as gradual feature rollout or undocumented whitelist,
  /// `NOT_FOUND` may be used. If a request is denied for some users within
  /// a class of users, such as user-based access control, `PERMISSION_DENIED`
  /// must be used.

  /// HTTP Mapping: 404 Not Found
  pub const NOT_FOUND: Code = Code(5);
  /// The entity that a client attempted to create (e.g., file or directory)
  /// already exists.

  /// HTTP Mapping: 409 Conflict
  pub const ALREADY_EXISTS: Code = Code(6);
  /// The caller does not have permission to execute the specified
  /// operation. `PERMISSION_DENIED` must not be used for rejections
  /// caused by exhausting some resource (use `RESOURCE_EXHAUSTED`
  /// instead for those errors). `PERMISSION_DENIED` must not be
  /// used if the caller can not be identified (use `UNAUTHENTICATED`
  /// instead for those errors). This error code does not imply the
  /// request is valid or the requested entity exists or satisfies
  /// other pre-conditions.

  /// HTTP Mapping: 403 Forbidden
  pub const PERMISSION_DENIED: Code = Code(7);
  /// The request does not have valid authentication credentials for the
  /// operation.

  /// HTTP Mapping: 401 Unauthorized
  pub const UNAUTHENTICATED: Code = Code(16);
  /// Some resource has been exhausted, perhaps a per-user quota, or
  /// perhaps the entire file system is out of space.

  /// HTTP Mapping: 429 Too Many Requests
  pub const RESOURCE_EXHAUSTED: Code = Code(8);
  /// The operation was rejected because the system is not in a state
  /// required for the operation's execution.  For example, the directory
  /// to be deleted is non-empty, an rmdir operation is applied to
  /// a non-directory, etc.

  /// Service implementors can use the following guidelines to decide
  /// between `FAILED_PRECONDITION`, `ABORTED`, and `UNAVAILABLE`:
  ///  (a) Use `UNAVAILABLE` if the client can retry just the failing call.
  ///  (b) Use `ABORTED` if the client should retry at a higher level
  ///      (e.g., when a client-specified test-and-set fails, indicating the
  ///      client should restart a read-modify-write sequence).
  ///  (c) Use `FAILED_PRECONDITION` if the client should not retry until
  ///      the system state has been explicitly fixed.  E.g., if an "rmdir"
  ///      fails because the directory is non-empty, `FAILED_PRECONDITION`
  ///      should be returned since the client should not retry unless
  ///      the files are deleted from the directory.

  /// HTTP Mapping: 400 Bad Request
  pub const FAILED_PRECONDITION: Code = Code(9);
  /// The operation was aborted, typically due to a concurrency issue such as
  /// a sequencer check failure or transaction abort.

  /// See the guidelines above for deciding between `FAILED_PRECONDITION`,
  /// `ABORTED`, and `UNAVAILABLE`.

  /// HTTP Mapping: 409 Conflict
  pub const ABORTED: Code = Code(10);
  /// The operation was attempted past the valid range.  E.g., seeking or
  /// reading past end-of-file.

  /// Unlike `INVALID_ARGUMENT`, this error indicates a problem that may
  /// be fixed if the system state changes. For example, a 32-bit file
  /// system will generate `INVALID_ARGUMENT` if asked to read at an
  /// offset that is not in the range [0,2^32-1], but it will generate
  /// `OUT_OF_RANGE` if asked to read from an offset past the current
  /// file size.

  /// There is a fair bit of overlap between `FAILED_PRECONDITION` and
  /// `OUT_OF_RANGE`.  We recommend using `OUT_OF_RANGE` (the more specific
  /// error) when it applies so that callers who are iterating through
  /// a space can easily look for an `OUT_OF_RANGE` error to detect when
  /// they are done.

  /// HTTP Mapping: 400 Bad Request
  pub const OUT_OF_RANGE: Code = Code(11);
  /// The operation is not implemented or is not supported/enabled in this
  /// service.

  /// HTTP Mapping: 501 Not Implemented
  pub const UNIMPLEMENTED: Code = Code(12);
  /// Internal errors.  This means that some invariants expected by the
  /// underlying system have been broken.  This error code is reserved
  /// for serious errors.

  /// HTTP Mapping: 500 Internal Server Error
  pub const INTERNAL: Code = Code(13);
  /// The service is currently unavailable.  This is most likely a
  /// transient condition, which can be corrected by retrying with
  /// a backoff. Note that it is not always safe to retry
  /// non-idempotent operations.

  /// See the guidelines above for deciding between `FAILED_PRECONDITION`,
  /// `ABORTED`, and `UNAVAILABLE`.

  /// HTTP Mapping: 503 Service Unavailable
  pub const UNAVAILABLE: Code = Code(14);
  /// Unrecoverable data loss or corruption.

  /// HTTP Mapping: 500 Internal Server Error
  pub const DATA_LOSS: Code = Code(15);
  pub const KNOWN_VARIANTS: [Code; 17] = [Code::OK, Code::CANCELLED, Code::UNKNOWN, Code::INVALID_ARGUMENT, Code::DEADLINE_EXCEEDED, Code::NOT_FOUND, Code::ALREADY_EXISTS, Code::PERMISSION_DENIED, Code::UNAUTHENTICATED, Code::RESOURCE_EXHAUSTED, Code::FAILED_PRECONDITION, Code::ABORTED, Code::OUT_OF_RANGE, Code::UNIMPLEMENTED, Code::INTERNAL, Code::UNAVAILABLE, Code::DATA_LOSS];
  pub const fn value(self) -> i32 {
    self.0
  }
  pub fn into_known(self) -> ::std::option::Option<Code_Closed> {
    match self {
      Code::OK => Some(Code_Closed::OK),
      Code::CANCELLED => Some(Code_Closed::CANCELLED),
      Code::UNKNOWN => Some(Code_Closed::UNKNOWN),
      Code::INVALID_ARGUMENT => Some(Code_Closed::INVALID_ARGUMENT),
      Code::DEADLINE_EXCEEDED => Some(Code_Closed::DEADLINE_EXCEEDED),
      Code::NOT_FOUND => Some(Code_Closed::NOT_FOUND),
      Code::ALREADY_EXISTS => Some(Code_Closed::ALREADY_EXISTS),
      Code::PERMISSION_DENIED => Some(Code_Closed::PERMISSION_DENIED),
      Code::UNAUTHENTICATED => Some(Code_Closed::UNAUTHENTICATED),
      Code::RESOURCE_EXHAUSTED => Some(Code_Closed::RESOURCE_EXHAUSTED),
      Code::FAILED_PRECONDITION => Some(Code_Closed::FAILED_PRECONDITION),
      Code::ABORTED => Some(Code_Closed::ABORTED),
      Code::OUT_OF_RANGE => Some(Code_Closed::OUT_OF_RANGE),
      Code::UNIMPLEMENTED => Some(Code_Closed::UNIMPLEMENTED),
      Code::INTERNAL => Some(Code_Closed::INTERNAL),
      Code::UNAVAILABLE => Some(Code_Closed::UNAVAILABLE),
      Code::DATA_LOSS => Some(Code_Closed::DATA_LOSS),
      _ => None,
    }
  }
}
impl ::std::default::Default for Code {
  fn default() -> Self {
    Code::OK
  }
}
impl From<Code> for i32 {
  fn from(v: Code) -> i32 {
    v.0
  }
}
impl From<i32> for Code {
  fn from(v: i32) -> Code {
    Code(v)
  }
}
impl From<Code_Closed> for Code {
  fn from(v: Code_Closed) -> Code {
    Code(v as i32)
  }
}
impl ::pb_jelly::ProtoEnum for Code {
}
impl ::pb_jelly::OpenProtoEnum for Code {
  fn name(self) -> ::std::option::Option<&'static str> {
    match self {
      Code::OK => Some("OK"),
      Code::CANCELLED => Some("CANCELLED"),
      Code::UNKNOWN => Some("UNKNOWN"),
      Code::INVALID_ARGUMENT => Some("INVALID_ARGUMENT"),
      Code::DEADLINE_EXCEEDED => Some("DEADLINE_EXCEEDED"),
      Code::NOT_FOUND => Some("NOT_FOUND"),
      Code::ALREADY_EXISTS => Some("ALREADY_EXISTS"),
      Code::PERMISSION_DENIED => Some("PERMISSION_DENIED"),
      Code::UNAUTHENTICATED => Some("UNAUTHENTICATED"),
      Code::RESOURCE_EXHAUSTED => Some("RESOURCE_EXHAUSTED"),
      Code::FAILED_PRECONDITION => Some("FAILED_PRECONDITION"),
      Code::ABORTED => Some("ABORTED"),
      Code::OUT_OF_RANGE => Some("OUT_OF_RANGE"),
      Code::UNIMPLEMENTED => Some("UNIMPLEMENTED"),
      Code::INTERNAL => Some("INTERNAL"),
      Code::UNAVAILABLE => Some("UNAVAILABLE"),
      Code::DATA_LOSS => Some("DATA_LOSS"),
      _ => None,
    }
  }
  fn is_known(self) -> bool {
    match self {
      Code::OK => true,
      Code::CANCELLED => true,
      Code::UNKNOWN => true,
      Code::INVALID_ARGUMENT => true,
      Code::DEADLINE_EXCEEDED => true,
      Code::NOT_FOUND => true,
      Code::ALREADY_EXISTS => true,
      Code::PERMISSION_DENIED => true,
      Code::UNAUTHENTICATED => true,
      Code::RESOURCE_EXHAUSTED => true,
      Code::FAILED_PRECONDITION => true,
      Code::ABORTED => true,
      Code::OUT_OF_RANGE => true,
      Code::UNIMPLEMENTED => true,
      Code::INTERNAL => true,
      Code::UNAVAILABLE => true,
      Code::DATA_LOSS => true,
      _ => false,
    }
  }
}
impl ::std::fmt::Debug for Code {
  fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
    use ::pb_jelly::OpenProtoEnum;
    match self.name() {
      Some(s) => write!(f, "{}", s),
      None => write!(f, "Unknown({})", self.0),
    }
  }
}
/// https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto

/// The canonical error codes for gRPC APIs.


/// Sometimes multiple error codes may apply.  Services should return
/// the most specific error code that applies.  For example, prefer
/// `OUT_OF_RANGE` over `FAILED_PRECONDITION` if both codes apply.
/// Similarly prefer `NOT_FOUND` or `ALREADY_EXISTS` over `FAILED_PRECONDITION`.
#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Debug, Hash)]
#[repr(i32)]
pub enum Code_Closed {
  /// Not an error; returned on success

  /// HTTP Mapping: 200 OK
  OK = 0,
  /// The operation was cancelled, typically by the caller.

  /// HTTP Mapping: 499 Client Closed Request
  CANCELLED = 1,
  /// Unknown error.  For example, this error may be returned when
  /// a `Status` value received from another address space belongs to
  /// an error space that is not known in this address space.  Also
  /// errors raised by APIs that do not return enough error information
  /// may be converted to this error.

  /// HTTP Mapping: 500 Internal Server Error
  UNKNOWN = 2,
  /// The client specified an invalid argument.  Note that this differs
  /// from `FAILED_PRECONDITION`.  `INVALID_ARGUMENT` indicates arguments
  /// that are problematic regardless of the state of the system
  /// (e.g., a malformed file name).

  /// HTTP Mapping: 400 Bad Request
  INVALID_ARGUMENT = 3,
  /// The deadline expired before the operation could complete. For operations
  /// that change the state of the system, this error may be returned
  /// even if the operation has completed successfully.  For example, a
  /// successful response from a server could have been delayed long
  /// enough for the deadline to expire.

  /// HTTP Mapping: 504 Gateway Timeout
  DEADLINE_EXCEEDED = 4,
  /// Some requested entity (e.g., file or directory) was not found.

  /// Note to server developers: if a request is denied for an entire class
  /// of users, such as gradual feature rollout or undocumented whitelist,
  /// `NOT_FOUND` may be used. If a request is denied for some users within
  /// a class of users, such as user-based access control, `PERMISSION_DENIED`
  /// must be used.

  /// HTTP Mapping: 404 Not Found
  NOT_FOUND = 5,
  /// The entity that a client attempted to create (e.g., file or directory)
  /// already exists.

  /// HTTP Mapping: 409 Conflict
  ALREADY_EXISTS = 6,
  /// The caller does not have permission to execute the specified
  /// operation. `PERMISSION_DENIED` must not be used for rejections
  /// caused by exhausting some resource (use `RESOURCE_EXHAUSTED`
  /// instead for those errors). `PERMISSION_DENIED` must not be
  /// used if the caller can not be identified (use `UNAUTHENTICATED`
  /// instead for those errors). This error code does not imply the
  /// request is valid or the requested entity exists or satisfies
  /// other pre-conditions.

  /// HTTP Mapping: 403 Forbidden
  PERMISSION_DENIED = 7,
  /// The request does not have valid authentication credentials for the
  /// operation.

  /// HTTP Mapping: 401 Unauthorized
  UNAUTHENTICATED = 16,
  /// Some resource has been exhausted, perhaps a per-user quota, or
  /// perhaps the entire file system is out of space.

  /// HTTP Mapping: 429 Too Many Requests
  RESOURCE_EXHAUSTED = 8,
  /// The operation was rejected because the system is not in a state
  /// required for the operation's execution.  For example, the directory
  /// to be deleted is non-empty, an rmdir operation is applied to
  /// a non-directory, etc.

  /// Service implementors can use the following guidelines to decide
  /// between `FAILED_PRECONDITION`, `ABORTED`, and `UNAVAILABLE`:
  ///  (a) Use `UNAVAILABLE` if the client can retry just the failing call.
  ///  (b) Use `ABORTED` if the client should retry at a higher level
  ///      (e.g., when a client-specified test-and-set fails, indicating the
  ///      client should restart a read-modify-write sequence).
  ///  (c) Use `FAILED_PRECONDITION` if the client should not retry until
  ///      the system state has been explicitly fixed.  E.g., if an "rmdir"
  ///      fails because the directory is non-empty, `FAILED_PRECONDITION`
  ///      should be returned since the client should not retry unless
  ///      the files are deleted from the directory.

  /// HTTP Mapping: 400 Bad Request
  FAILED_PRECONDITION = 9,
  /// The operation was aborted, typically due to a concurrency issue such as
  /// a sequencer check failure or transaction abort.

  /// See the guidelines above for deciding between `FAILED_PRECONDITION`,
  /// `ABORTED`, and `UNAVAILABLE`.

  /// HTTP Mapping: 409 Conflict
  ABORTED = 10,
  /// The operation was attempted past the valid range.  E.g., seeking or
  /// reading past end-of-file.

  /// Unlike `INVALID_ARGUMENT`, this error indicates a problem that may
  /// be fixed if the system state changes. For example, a 32-bit file
  /// system will generate `INVALID_ARGUMENT` if asked to read at an
  /// offset that is not in the range [0,2^32-1], but it will generate
  /// `OUT_OF_RANGE` if asked to read from an offset past the current
  /// file size.

  /// There is a fair bit of overlap between `FAILED_PRECONDITION` and
  /// `OUT_OF_RANGE`.  We recommend using `OUT_OF_RANGE` (the more specific
  /// error) when it applies so that callers who are iterating through
  /// a space can easily look for an `OUT_OF_RANGE` error to detect when
  /// they are done.

  /// HTTP Mapping: 400 Bad Request
  OUT_OF_RANGE = 11,
  /// The operation is not implemented or is not supported/enabled in this
  /// service.

  /// HTTP Mapping: 501 Not Implemented
  UNIMPLEMENTED = 12,
  /// Internal errors.  This means that some invariants expected by the
  /// underlying system have been broken.  This error code is reserved
  /// for serious errors.

  /// HTTP Mapping: 500 Internal Server Error
  INTERNAL = 13,
  /// The service is currently unavailable.  This is most likely a
  /// transient condition, which can be corrected by retrying with
  /// a backoff. Note that it is not always safe to retry
  /// non-idempotent operations.

  /// See the guidelines above for deciding between `FAILED_PRECONDITION`,
  /// `ABORTED`, and `UNAVAILABLE`.

  /// HTTP Mapping: 503 Service Unavailable
  UNAVAILABLE = 14,
  /// Unrecoverable data loss or corruption.

  /// HTTP Mapping: 500 Internal Server Error
  DATA_LOSS = 15,
}
impl Code_Closed {
  pub const KNOWN_VARIANTS: [Code_Closed; 17] = [Code_Closed::OK, Code_Closed::CANCELLED, Code_Closed::UNKNOWN, Code_Closed::INVALID_ARGUMENT, Code_Closed::DEADLINE_EXCEEDED, Code_Closed::NOT_FOUND, Code_Closed::ALREADY_EXISTS, Code_Closed::PERMISSION_DENIED, Code_Closed::UNAUTHENTICATED, Code_Closed::RESOURCE_EXHAUSTED, Code_Closed::FAILED_PRECONDITION, Code_Closed::ABORTED, Code_Closed::OUT_OF_RANGE, Code_Closed::UNIMPLEMENTED, Code_Closed::INTERNAL, Code_Closed::UNAVAILABLE, Code_Closed::DATA_LOSS];
}
impl ::std::default::Default for Code_Closed {
  fn default() -> Self {
    Code_Closed::OK
  }
}
impl From<Code_Closed> for i32 {
  fn from(v: Code_Closed) -> i32 {
    match v {
      Code_Closed::OK => 0,
      Code_Closed::CANCELLED => 1,
      Code_Closed::UNKNOWN => 2,
      Code_Closed::INVALID_ARGUMENT => 3,
      Code_Closed::DEADLINE_EXCEEDED => 4,
      Code_Closed::NOT_FOUND => 5,
      Code_Closed::ALREADY_EXISTS => 6,
      Code_Closed::PERMISSION_DENIED => 7,
      Code_Closed::UNAUTHENTICATED => 16,
      Code_Closed::RESOURCE_EXHAUSTED => 8,
      Code_Closed::FAILED_PRECONDITION => 9,
      Code_Closed::ABORTED => 10,
      Code_Closed::OUT_OF_RANGE => 11,
      Code_Closed::UNIMPLEMENTED => 12,
      Code_Closed::INTERNAL => 13,
      Code_Closed::UNAVAILABLE => 14,
      Code_Closed::DATA_LOSS => 15,
    }
  }
}
impl ::std::convert::TryFrom<i32> for Code_Closed {
  type Error = i32;
  fn try_from(v: i32) -> ::std::result::Result<Self, i32> {
    match v {
      0 => Ok(Code_Closed::OK),
      1 => Ok(Code_Closed::CANCELLED),
      2 => Ok(Code_Closed::UNKNOWN),
      3 => Ok(Code_Closed::INVALID_ARGUMENT),
      4 => Ok(Code_Closed::DEADLINE_EXCEEDED),
      5 => Ok(Code_Closed::NOT_FOUND),
      6 => Ok(Code_Closed::ALREADY_EXISTS),
      7 => Ok(Code_Closed::PERMISSION_DENIED),
      16 => Ok(Code_Closed::UNAUTHENTICATED),
      8 => Ok(Code_Closed::RESOURCE_EXHAUSTED),
      9 => Ok(Code_Closed::FAILED_PRECONDITION),
      10 => Ok(Code_Closed::ABORTED),
      11 => Ok(Code_Closed::OUT_OF_RANGE),
      12 => Ok(Code_Closed::UNIMPLEMENTED),
      13 => Ok(Code_Closed::INTERNAL),
      14 => Ok(Code_Closed::UNAVAILABLE),
      15 => Ok(Code_Closed::DATA_LOSS),
      _ => Err(v),
    }
  }
}
impl ::pb_jelly::ProtoEnum for Code_Closed {
}
impl ::pb_jelly::ClosedProtoEnum for Code_Closed {
  fn name(self) -> &'static str {
    match self {
      Code_Closed::OK => "OK",
      Code_Closed::CANCELLED => "CANCELLED",
      Code_Closed::UNKNOWN => "UNKNOWN",
      Code_Closed::INVALID_ARGUMENT => "INVALID_ARGUMENT",
      Code_Closed::DEADLINE_EXCEEDED => "DEADLINE_EXCEEDED",
      Code_Closed::NOT_FOUND => "NOT_FOUND",
      Code_Closed::ALREADY_EXISTS => "ALREADY_EXISTS",
      Code_Closed::PERMISSION_DENIED => "PERMISSION_DENIED",
      Code_Closed::UNAUTHENTICATED => "UNAUTHENTICATED",
      Code_Closed::RESOURCE_EXHAUSTED => "RESOURCE_EXHAUSTED",
      Code_Closed::FAILED_PRECONDITION => "FAILED_PRECONDITION",
      Code_Closed::ABORTED => "ABORTED",
      Code_Closed::OUT_OF_RANGE => "OUT_OF_RANGE",
      Code_Closed::UNIMPLEMENTED => "UNIMPLEMENTED",
      Code_Closed::INTERNAL => "INTERNAL",
      Code_Closed::UNAVAILABLE => "UNAVAILABLE",
      Code_Closed::DATA_LOSS => "DATA_LOSS",
    }
  }
}

#[derive(Clone, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct Status {
  pub code: Code,
  /// Message containing status details
  pub message: ::std::string::String,
  /// Set by the backend (to enable troubleshooting)
  pub request_id: ::std::string::String,
}
impl ::std::default::Default for Status {
  fn default() -> Self {
    Status {
      code: ::std::default::Default::default(),
      message: ::std::default::Default::default(),
      request_id: ::std::default::Default::default(),
    }
  }
}
lazy_static! {
  pub static ref Status_default: Status = Status::default();
}
impl ::pb_jelly::Message for Status {
  fn descriptor(&self) -> ::std::option::Option<::pb_jelly::MessageDescriptor> {
    Some(::pb_jelly::MessageDescriptor {
      name: "Status",
      full_name: "protos.common.Status",
      fields: &[
        ::pb_jelly::FieldDescriptor {
          name: "code",
          full_name: "protos.common.Status.code",
          index: 0,
          number: 1,
          typ: ::pb_jelly::wire_format::Type::Varint,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "message",
          full_name: "protos.common.Status.message",
          index: 1,
          number: 2,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
        ::pb_jelly::FieldDescriptor {
          name: "request_id",
          full_name: "protos.common.Status.request_id",
          index: 2,
          number: 3,
          typ: ::pb_jelly::wire_format::Type::LengthDelimited,
          label: ::pb_jelly::Label::Optional,
          oneof_index: None,
        },
      ],
      oneofs: &[
      ],
    })
  }
  fn compute_size(&self) -> usize {
    let mut size = 0;
    let mut code_size = 0;
    if self.code != <Code as ::std::default::Default>::default() {
      let val = &self.code;
      let l = ::pb_jelly::Message::compute_size(val);
      code_size += ::pb_jelly::wire_format::serialized_length(1);
      code_size += l;
    }
    size += code_size;
    let mut message_size = 0;
    if self.message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message;
      let l = ::pb_jelly::Message::compute_size(val);
      message_size += ::pb_jelly::wire_format::serialized_length(2);
      message_size += ::pb_jelly::varint::serialized_length(l as u64);
      message_size += l;
    }
    size += message_size;
    let mut request_id_size = 0;
    if self.request_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.request_id;
      let l = ::pb_jelly::Message::compute_size(val);
      request_id_size += ::pb_jelly::wire_format::serialized_length(3);
      request_id_size += ::pb_jelly::varint::serialized_length(l as u64);
      request_id_size += l;
    }
    size += request_id_size;
    size
  }
  fn compute_grpc_slices_size(&self) -> usize {
    let mut size = 0;
    if self.code != <Code as ::std::default::Default>::default() {
      let val = &self.code;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    if self.request_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.request_id;
      size += ::pb_jelly::Message::compute_grpc_slices_size(val);
    }
    size
  }
  fn serialize<W: ::pb_jelly::PbBufferWriter>(&self, w: &mut W) -> ::std::io::Result<()> {
    if self.code != <Code as ::std::default::Default>::default() {
      let val = &self.code;
      ::pb_jelly::wire_format::write(1, ::pb_jelly::wire_format::Type::Varint, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.message != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.message;
      ::pb_jelly::wire_format::write(2, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    if self.request_id != <::std::string::String as ::std::default::Default>::default() {
      let val = &self.request_id;
      ::pb_jelly::wire_format::write(3, ::pb_jelly::wire_format::Type::LengthDelimited, w)?;
      let l = ::pb_jelly::Message::compute_size(val);
      ::pb_jelly::varint::write(l as u64, w)?;
      ::pb_jelly::Message::serialize(val, w)?;
    }
    Ok(())
  }
  fn deserialize<B: ::pb_jelly::PbBufferReader>(&mut self, mut buf: &mut B) -> ::std::io::Result<()> {
    while let Some((field_number, typ)) = ::pb_jelly::wire_format::read(&mut buf)? {
      match field_number {
        1 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::Varint, "Status", 1)?;
          let mut val: Code = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, buf)?;
          self.code = val;
        }
        2 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Status", 2)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.message = val;
        }
        3 => {
          ::pb_jelly::ensure_wire_format(typ, ::pb_jelly::wire_format::Type::LengthDelimited, "Status", 3)?;
          let len = ::pb_jelly::varint::ensure_read(&mut buf)?;
          let mut next = ::pb_jelly::ensure_split(buf, len as usize)?;
          let mut val: ::std::string::String = ::std::default::Default::default();
          ::pb_jelly::Message::deserialize(&mut val, &mut next)?;
          self.request_id = val;
        }
        _ => {
          ::pb_jelly::skip(typ, &mut buf)?;
        }
      }
    }
    Ok(())
  }
}
impl ::pb_jelly::Reflection for Status {
  fn which_one_of(&self, oneof_name: &str) -> ::std::option::Option<&'static str> {
    match oneof_name {
      _ => {
        panic!("unknown oneof name given");
      }
    }
  }
  fn get_field_mut(&mut self, field_name: &str) -> ::pb_jelly::reflection::FieldMut<'_> {
    match field_name {
      "code" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.code)
      }
      "message" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.message)
      }
      "request_id" => {
        ::pb_jelly::reflection::FieldMut::Value(&mut self.request_id)
      }
      _ => {
        panic!("unknown field name given")
      }
    }
  }
}

