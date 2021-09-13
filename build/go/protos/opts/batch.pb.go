// Code generated by protoc-gen-go. DO NOT EDIT.
// source: opts/batch.proto

package opts

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type BatchOutputType int32

const (
	BatchOutputType_TABLE BatchOutputType = 0
	BatchOutputType_JSON  BatchOutputType = 1
)

var BatchOutputType_name = map[int32]string{
	0: "TABLE",
	1: "JSON",
}

var BatchOutputType_value = map[string]int32{
	"TABLE": 0,
	"JSON":  1,
}

func (x BatchOutputType) String() string {
	return proto.EnumName(BatchOutputType_name, int32(x))
}

func (BatchOutputType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{0}
}

type BatchReplayType int32

const (
	BatchReplayType_SINGLE     BatchReplayType = 0
	BatchReplayType_CONTINUOUS BatchReplayType = 1
)

var BatchReplayType_name = map[int32]string{
	0: "SINGLE",
	1: "CONTINUOUS",
}

var BatchReplayType_value = map[string]int32{
	"SINGLE":     0,
	"CONTINUOUS": 1,
}

func (x BatchReplayType) String() string {
	return proto.EnumName(BatchReplayType_name, int32(x))
}

func (BatchReplayType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{1}
}

type BatchOptions struct {
	// @gotags: kong:"embed,cmd,help='Login to the Batch platform'"
	Login *BatchLoginOptions `protobuf:"bytes,1,opt,name=login,proto3" json:"login,omitempty" kong:"embed,cmd,help='Login to the Batch platform'"`
	// @gotags: kong:"embed,cmd,help='Login to Batch'"
	Logout *BatchLogoutOptions `protobuf:"bytes,2,opt,name=logout,proto3" json:"logout,omitempty" kong:"embed,cmd,help='Login to Batch'"`
	// @gotags: kong:"embed,cmd,help='List Batch resources'"
	List *BatchListOptions `protobuf:"bytes,3,opt,name=list,proto3" json:"list,omitempty" kong:"embed,cmd,help='List Batch resources'"`
	// @gotags: kong:"embed,cmd,help='Create operations'"
	Create *BatchCreateOptions `protobuf:"bytes,4,opt,name=create,proto3" json:"create,omitempty" kong:"embed,cmd,help='Create operations'"`
	// @gotags: kong:"embed,cmd,help='Search operations'"
	Search *BatchSearchOptions `protobuf:"bytes,5,opt,name=search,proto3" json:"search,omitempty" kong:"embed,cmd,help='Search operations'"`
	// @gotags: kong:"embed,cmd,help='Archive a resource'"
	Archive              *BatchArchiveOptions `protobuf:"bytes,6,opt,name=archive,proto3" json:"archive,omitempty" kong:"embed,cmd,help='Archive a resource'"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *BatchOptions) Reset()         { *m = BatchOptions{} }
func (m *BatchOptions) String() string { return proto.CompactTextString(m) }
func (*BatchOptions) ProtoMessage()    {}
func (*BatchOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{0}
}

func (m *BatchOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchOptions.Unmarshal(m, b)
}
func (m *BatchOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchOptions.Marshal(b, m, deterministic)
}
func (m *BatchOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchOptions.Merge(m, src)
}
func (m *BatchOptions) XXX_Size() int {
	return xxx_messageInfo_BatchOptions.Size(m)
}
func (m *BatchOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchOptions proto.InternalMessageInfo

func (m *BatchOptions) GetLogin() *BatchLoginOptions {
	if m != nil {
		return m.Login
	}
	return nil
}

func (m *BatchOptions) GetLogout() *BatchLogoutOptions {
	if m != nil {
		return m.Logout
	}
	return nil
}

func (m *BatchOptions) GetList() *BatchListOptions {
	if m != nil {
		return m.List
	}
	return nil
}

func (m *BatchOptions) GetCreate() *BatchCreateOptions {
	if m != nil {
		return m.Create
	}
	return nil
}

func (m *BatchOptions) GetSearch() *BatchSearchOptions {
	if m != nil {
		return m.Search
	}
	return nil
}

func (m *BatchOptions) GetArchive() *BatchArchiveOptions {
	if m != nil {
		return m.Archive
	}
	return nil
}

type BatchLoginOptions struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BatchLoginOptions) Reset()         { *m = BatchLoginOptions{} }
func (m *BatchLoginOptions) String() string { return proto.CompactTextString(m) }
func (*BatchLoginOptions) ProtoMessage()    {}
func (*BatchLoginOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{1}
}

func (m *BatchLoginOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchLoginOptions.Unmarshal(m, b)
}
func (m *BatchLoginOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchLoginOptions.Marshal(b, m, deterministic)
}
func (m *BatchLoginOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchLoginOptions.Merge(m, src)
}
func (m *BatchLoginOptions) XXX_Size() int {
	return xxx_messageInfo_BatchLoginOptions.Size(m)
}
func (m *BatchLoginOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchLoginOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchLoginOptions proto.InternalMessageInfo

type BatchLogoutOptions struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BatchLogoutOptions) Reset()         { *m = BatchLogoutOptions{} }
func (m *BatchLogoutOptions) String() string { return proto.CompactTextString(m) }
func (*BatchLogoutOptions) ProtoMessage()    {}
func (*BatchLogoutOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{2}
}

func (m *BatchLogoutOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchLogoutOptions.Unmarshal(m, b)
}
func (m *BatchLogoutOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchLogoutOptions.Marshal(b, m, deterministic)
}
func (m *BatchLogoutOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchLogoutOptions.Merge(m, src)
}
func (m *BatchLogoutOptions) XXX_Size() int {
	return xxx_messageInfo_BatchLogoutOptions.Size(m)
}
func (m *BatchLogoutOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchLogoutOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchLogoutOptions proto.InternalMessageInfo

type BatchArchiveOptions struct {
	// @gotags: kong:"embed,cmd,help='Archive a replay'"
	Replay               *BatchArchiveReplayOptions `protobuf:"bytes,1,opt,name=replay,proto3" json:"replay,omitempty" kong:"embed,cmd,help='Archive a replay'"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *BatchArchiveOptions) Reset()         { *m = BatchArchiveOptions{} }
func (m *BatchArchiveOptions) String() string { return proto.CompactTextString(m) }
func (*BatchArchiveOptions) ProtoMessage()    {}
func (*BatchArchiveOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{3}
}

func (m *BatchArchiveOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchArchiveOptions.Unmarshal(m, b)
}
func (m *BatchArchiveOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchArchiveOptions.Marshal(b, m, deterministic)
}
func (m *BatchArchiveOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchArchiveOptions.Merge(m, src)
}
func (m *BatchArchiveOptions) XXX_Size() int {
	return xxx_messageInfo_BatchArchiveOptions.Size(m)
}
func (m *BatchArchiveOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchArchiveOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchArchiveOptions proto.InternalMessageInfo

func (m *BatchArchiveOptions) GetReplay() *BatchArchiveReplayOptions {
	if m != nil {
		return m.Replay
	}
	return nil
}

type BatchArchiveReplayOptions struct {
	// @gotags: kong:"help='Replay ID to archive',required"
	ReplayId             string   `protobuf:"bytes,1,opt,name=replay_id,json=replayId,proto3" json:"replay_id,omitempty" kong:"help='Replay ID to archive',required"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BatchArchiveReplayOptions) Reset()         { *m = BatchArchiveReplayOptions{} }
func (m *BatchArchiveReplayOptions) String() string { return proto.CompactTextString(m) }
func (*BatchArchiveReplayOptions) ProtoMessage()    {}
func (*BatchArchiveReplayOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{4}
}

func (m *BatchArchiveReplayOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchArchiveReplayOptions.Unmarshal(m, b)
}
func (m *BatchArchiveReplayOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchArchiveReplayOptions.Marshal(b, m, deterministic)
}
func (m *BatchArchiveReplayOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchArchiveReplayOptions.Merge(m, src)
}
func (m *BatchArchiveReplayOptions) XXX_Size() int {
	return xxx_messageInfo_BatchArchiveReplayOptions.Size(m)
}
func (m *BatchArchiveReplayOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchArchiveReplayOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchArchiveReplayOptions proto.InternalMessageInfo

func (m *BatchArchiveReplayOptions) GetReplayId() string {
	if m != nil {
		return m.ReplayId
	}
	return ""
}

type BatchListOptions struct {
	// @gotags: kong:"help='How to output results (0: table, 1: JSON)',default=0"
	OutputType BatchOutputType `protobuf:"varint,1,opt,name=output_type,json=outputType,proto3,enum=protos.opts.BatchOutputType" json:"output_type,omitempty" kong:"help='How to output results (0: table, 1: JSON)',default=0"`
	// @gotags: kong:"cmd,help='List all collections'"
	Collection bool `protobuf:"varint,2,opt,name=collection,proto3" json:"collection,omitempty" kong:"cmd,help='List all collections'"`
	// @gotags: kong:"cmd,help='List all destinations'"
	Destination bool `protobuf:"varint,3,opt,name=destination,proto3" json:"destination,omitempty" kong:"cmd,help='List all destinations'"`
	// @gotags: kong:"cmd,help='List all replays'"
	Replay bool `protobuf:"varint,4,opt,name=replay,proto3" json:"replay,omitempty" kong:"cmd,help='List all replays'"`
	// @gotags: kong:"cmd,help='List all schemas'"
	Schema               bool     `protobuf:"varint,5,opt,name=schema,proto3" json:"schema,omitempty" kong:"cmd,help='List all schemas'"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BatchListOptions) Reset()         { *m = BatchListOptions{} }
func (m *BatchListOptions) String() string { return proto.CompactTextString(m) }
func (*BatchListOptions) ProtoMessage()    {}
func (*BatchListOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{5}
}

func (m *BatchListOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchListOptions.Unmarshal(m, b)
}
func (m *BatchListOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchListOptions.Marshal(b, m, deterministic)
}
func (m *BatchListOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchListOptions.Merge(m, src)
}
func (m *BatchListOptions) XXX_Size() int {
	return xxx_messageInfo_BatchListOptions.Size(m)
}
func (m *BatchListOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchListOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchListOptions proto.InternalMessageInfo

func (m *BatchListOptions) GetOutputType() BatchOutputType {
	if m != nil {
		return m.OutputType
	}
	return BatchOutputType_TABLE
}

func (m *BatchListOptions) GetCollection() bool {
	if m != nil {
		return m.Collection
	}
	return false
}

func (m *BatchListOptions) GetDestination() bool {
	if m != nil {
		return m.Destination
	}
	return false
}

func (m *BatchListOptions) GetReplay() bool {
	if m != nil {
		return m.Replay
	}
	return false
}

func (m *BatchListOptions) GetSchema() bool {
	if m != nil {
		return m.Schema
	}
	return false
}

type BatchCreateOptions struct {
	// @gotags: kong:"embed,cmd,help='Create a collection'"
	Collection *BatchCreateCollectionOptions `protobuf:"bytes,1,opt,name=collection,proto3" json:"collection,omitempty" kong:"embed,cmd,help='Create a collection'"`
	// @gotags: kong:"embed,cmd,help='Create a replay'"
	Replay *BatchCreateReplayOptions `protobuf:"bytes,2,opt,name=replay,proto3" json:"replay,omitempty" kong:"embed,cmd,help='Create a replay'"`
	// @gotags: kong:"embed,cmd,help='Create a destination'"
	Destination          *BatchCreateDestinationOptions `protobuf:"bytes,3,opt,name=destination,proto3" json:"destination,omitempty" kong:"embed,cmd,help='Create a destination'"`
	XXX_NoUnkeyedLiteral struct{}                       `json:"-"`
	XXX_unrecognized     []byte                         `json:"-"`
	XXX_sizecache        int32                          `json:"-"`
}

func (m *BatchCreateOptions) Reset()         { *m = BatchCreateOptions{} }
func (m *BatchCreateOptions) String() string { return proto.CompactTextString(m) }
func (*BatchCreateOptions) ProtoMessage()    {}
func (*BatchCreateOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{6}
}

func (m *BatchCreateOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchCreateOptions.Unmarshal(m, b)
}
func (m *BatchCreateOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchCreateOptions.Marshal(b, m, deterministic)
}
func (m *BatchCreateOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchCreateOptions.Merge(m, src)
}
func (m *BatchCreateOptions) XXX_Size() int {
	return xxx_messageInfo_BatchCreateOptions.Size(m)
}
func (m *BatchCreateOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchCreateOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchCreateOptions proto.InternalMessageInfo

func (m *BatchCreateOptions) GetCollection() *BatchCreateCollectionOptions {
	if m != nil {
		return m.Collection
	}
	return nil
}

func (m *BatchCreateOptions) GetReplay() *BatchCreateReplayOptions {
	if m != nil {
		return m.Replay
	}
	return nil
}

func (m *BatchCreateOptions) GetDestination() *BatchCreateDestinationOptions {
	if m != nil {
		return m.Destination
	}
	return nil
}

type BatchSearchOptions struct {
	// @gotags: kong:"help='Query to perform',default='*'"
	Query string `protobuf:"bytes,1,opt,name=query,proto3" json:"query,omitempty" kong:"help='Query to perform',default='*'"`
	// @gotags: kong:"help='Collection id to query',required"
	CollectionId string `protobuf:"bytes,2,opt,name=collection_id,json=collectionId,proto3" json:"collection_id,omitempty" kong:"help='Collection id to query',required"`
	// @gotags: kong:"help='How many results to display',default=25"
	PageSize             int32    `protobuf:"varint,3,opt,name=page_size,json=pageSize,proto3" json:"page_size,omitempty" kong:"help='How many results to display',default=25"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BatchSearchOptions) Reset()         { *m = BatchSearchOptions{} }
func (m *BatchSearchOptions) String() string { return proto.CompactTextString(m) }
func (*BatchSearchOptions) ProtoMessage()    {}
func (*BatchSearchOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{7}
}

func (m *BatchSearchOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchSearchOptions.Unmarshal(m, b)
}
func (m *BatchSearchOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchSearchOptions.Marshal(b, m, deterministic)
}
func (m *BatchSearchOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchSearchOptions.Merge(m, src)
}
func (m *BatchSearchOptions) XXX_Size() int {
	return xxx_messageInfo_BatchSearchOptions.Size(m)
}
func (m *BatchSearchOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchSearchOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchSearchOptions proto.InternalMessageInfo

func (m *BatchSearchOptions) GetQuery() string {
	if m != nil {
		return m.Query
	}
	return ""
}

func (m *BatchSearchOptions) GetCollectionId() string {
	if m != nil {
		return m.CollectionId
	}
	return ""
}

func (m *BatchSearchOptions) GetPageSize() int32 {
	if m != nil {
		return m.PageSize
	}
	return 0
}

type BatchCreateCollectionOptions struct {
	// @gotags: kong:"help='Friendly name for the collection',required"
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty" kong:"help='Friendly name for the collection',required"`
	// @gotags: kong:"help='Schema the collection will use (can be obtained running `plumber batch list schema`',required"
	SchemaId string `protobuf:"bytes,2,opt,name=schema_id,json=schemaId,proto3" json:"schema_id,omitempty" kong:"help='Schema the collection will use (can be obtained running `plumber batch list schema`',required"`
	// @gotags: kong:"help='Optional notes for the collection'"
	Notes                string   `protobuf:"bytes,3,opt,name=notes,proto3" json:"notes,omitempty" kong:"help='Optional notes for the collection'"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BatchCreateCollectionOptions) Reset()         { *m = BatchCreateCollectionOptions{} }
func (m *BatchCreateCollectionOptions) String() string { return proto.CompactTextString(m) }
func (*BatchCreateCollectionOptions) ProtoMessage()    {}
func (*BatchCreateCollectionOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{8}
}

func (m *BatchCreateCollectionOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchCreateCollectionOptions.Unmarshal(m, b)
}
func (m *BatchCreateCollectionOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchCreateCollectionOptions.Marshal(b, m, deterministic)
}
func (m *BatchCreateCollectionOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchCreateCollectionOptions.Merge(m, src)
}
func (m *BatchCreateCollectionOptions) XXX_Size() int {
	return xxx_messageInfo_BatchCreateCollectionOptions.Size(m)
}
func (m *BatchCreateCollectionOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchCreateCollectionOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchCreateCollectionOptions proto.InternalMessageInfo

func (m *BatchCreateCollectionOptions) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *BatchCreateCollectionOptions) GetSchemaId() string {
	if m != nil {
		return m.SchemaId
	}
	return ""
}

func (m *BatchCreateCollectionOptions) GetNotes() string {
	if m != nil {
		return m.Notes
	}
	return ""
}

type BatchCreateReplayOptions struct {
	// @gotags: kong:"help='Friendly name to assign to the replay',required"
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty" kong:"help='Friendly name to assign to the replay',required"`
	// @gotags: kong:"help='One-time or continuous replay (default: one-time; 0: ONE_TIME, 1: CONTINUOUS)',default=0"
	Type BatchReplayType `protobuf:"varint,2,opt,name=type,proto3,enum=protos.opts.BatchReplayType" json:"type,omitempty" kong:"help='One-time or continuous replay (default: one-time; 0: ONE_TIME, 1: CONTINUOUS)',default=0"`
	// @gotags: kong:"help='Notes to attach to the replay'"
	Notes string `protobuf:"bytes,3,opt,name=notes,proto3" json:"notes,omitempty" kong:"help='Notes to attach to the replay'"`
	// @gotags: kong:"help='Collection ID to replay from',required"
	CollectionId string `protobuf:"bytes,4,opt,name=collection_id,json=collectionId,proto3" json:"collection_id,omitempty" kong:"help='Collection ID to replay from',required"`
	// @gotags: kong:"help='Destination ID to replay to',required"
	DestinationId string `protobuf:"bytes,5,opt,name=destination_id,json=destinationId,proto3" json:"destination_id,omitempty" kong:"help='Destination ID to replay to',required"`
	// @gotags: kong:"help='Search query',default='*'"
	Query string `protobuf:"bytes,6,opt,name=query,proto3" json:"query,omitempty" kong:"help='Search query',default='*'"`
	// @gotags: kong:"help='Where to begin search (RFC3339 timestamp)',required"
	FromTimestamp string `protobuf:"bytes,7,opt,name=from_timestamp,json=fromTimestamp,proto3" json:"from_timestamp,omitempty" kong:"help='Where to begin search (RFC3339 timestamp)',required"`
	// @gotags: kong:"help='Where to end search (RFC3339 timestamp)',required"
	ToTimestamp          string   `protobuf:"bytes,8,opt,name=to_timestamp,json=toTimestamp,proto3" json:"to_timestamp,omitempty" kong:"help='Where to end search (RFC3339 timestamp)',required"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BatchCreateReplayOptions) Reset()         { *m = BatchCreateReplayOptions{} }
func (m *BatchCreateReplayOptions) String() string { return proto.CompactTextString(m) }
func (*BatchCreateReplayOptions) ProtoMessage()    {}
func (*BatchCreateReplayOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{9}
}

func (m *BatchCreateReplayOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchCreateReplayOptions.Unmarshal(m, b)
}
func (m *BatchCreateReplayOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchCreateReplayOptions.Marshal(b, m, deterministic)
}
func (m *BatchCreateReplayOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchCreateReplayOptions.Merge(m, src)
}
func (m *BatchCreateReplayOptions) XXX_Size() int {
	return xxx_messageInfo_BatchCreateReplayOptions.Size(m)
}
func (m *BatchCreateReplayOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchCreateReplayOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchCreateReplayOptions proto.InternalMessageInfo

func (m *BatchCreateReplayOptions) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *BatchCreateReplayOptions) GetType() BatchReplayType {
	if m != nil {
		return m.Type
	}
	return BatchReplayType_SINGLE
}

func (m *BatchCreateReplayOptions) GetNotes() string {
	if m != nil {
		return m.Notes
	}
	return ""
}

func (m *BatchCreateReplayOptions) GetCollectionId() string {
	if m != nil {
		return m.CollectionId
	}
	return ""
}

func (m *BatchCreateReplayOptions) GetDestinationId() string {
	if m != nil {
		return m.DestinationId
	}
	return ""
}

func (m *BatchCreateReplayOptions) GetQuery() string {
	if m != nil {
		return m.Query
	}
	return ""
}

func (m *BatchCreateReplayOptions) GetFromTimestamp() string {
	if m != nil {
		return m.FromTimestamp
	}
	return ""
}

func (m *BatchCreateReplayOptions) GetToTimestamp() string {
	if m != nil {
		return m.ToTimestamp
	}
	return ""
}

type BatchCreateDestinationOptions struct {
	// @gotags: kong:"help='Friendly name to assign to the destination',required"
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty" kong:"help='Friendly name to assign to the destination',required"`
	// @gotags: kong:"help='Any notes to include with the destination'"
	Notes string `protobuf:"bytes,2,opt,name=notes,proto3" json:"notes,omitempty" kong:"help='Any notes to include with the destination'"`
	// @gotags: kong:"cmd,help='Apache Kafka'"
	Kafka *WriteGroupKafkaOptions `protobuf:"bytes,100,opt,name=kafka,proto3" json:"kafka,omitempty" kong:"cmd,help='Apache Kafka'"`
	// @gotags: kong:"cmd,help='RabbitMQ'"
	Rabbit *WriteGroupRabbitOptions `protobuf:"bytes,101,opt,name=rabbit,proto3" json:"rabbit,omitempty" kong:"cmd,help='RabbitMQ'"`
	// @gotags: kong:"cmd,help='KubeMQ Queue'"
	KubemqQueue *WriteGroupKubeMQQueueOptions `protobuf:"bytes,102,opt,name=kubemq_queue,json=kubemqQueue,proto3" json:"kubemq_queue,omitempty" kong:"cmd,help='KubeMQ Queue'"`
	// @gotags: kong:"cmd,help='AWS Simple Queue System'"
	Awssqs *WriteGroupAWSSQSOptions `protobuf:"bytes,103,opt,name=awssqs,proto3" json:"awssqs,omitempty" kong:"cmd,help='AWS Simple Queue System'"`
	// @gotags: kong:"cmd,help='HTTP Destination (POST)'"
	Http                 *HTTPDestination `protobuf:"bytes,104,opt,name=http,proto3" json:"http,omitempty" kong:"cmd,help='HTTP Destination (POST)'"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *BatchCreateDestinationOptions) Reset()         { *m = BatchCreateDestinationOptions{} }
func (m *BatchCreateDestinationOptions) String() string { return proto.CompactTextString(m) }
func (*BatchCreateDestinationOptions) ProtoMessage()    {}
func (*BatchCreateDestinationOptions) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{10}
}

func (m *BatchCreateDestinationOptions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchCreateDestinationOptions.Unmarshal(m, b)
}
func (m *BatchCreateDestinationOptions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchCreateDestinationOptions.Marshal(b, m, deterministic)
}
func (m *BatchCreateDestinationOptions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchCreateDestinationOptions.Merge(m, src)
}
func (m *BatchCreateDestinationOptions) XXX_Size() int {
	return xxx_messageInfo_BatchCreateDestinationOptions.Size(m)
}
func (m *BatchCreateDestinationOptions) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchCreateDestinationOptions.DiscardUnknown(m)
}

var xxx_messageInfo_BatchCreateDestinationOptions proto.InternalMessageInfo

func (m *BatchCreateDestinationOptions) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *BatchCreateDestinationOptions) GetNotes() string {
	if m != nil {
		return m.Notes
	}
	return ""
}

func (m *BatchCreateDestinationOptions) GetKafka() *WriteGroupKafkaOptions {
	if m != nil {
		return m.Kafka
	}
	return nil
}

func (m *BatchCreateDestinationOptions) GetRabbit() *WriteGroupRabbitOptions {
	if m != nil {
		return m.Rabbit
	}
	return nil
}

func (m *BatchCreateDestinationOptions) GetKubemqQueue() *WriteGroupKubeMQQueueOptions {
	if m != nil {
		return m.KubemqQueue
	}
	return nil
}

func (m *BatchCreateDestinationOptions) GetAwssqs() *WriteGroupAWSSQSOptions {
	if m != nil {
		return m.Awssqs
	}
	return nil
}

func (m *BatchCreateDestinationOptions) GetHttp() *HTTPDestination {
	if m != nil {
		return m.Http
	}
	return nil
}

type HTTPDestination struct {
	// @gotags: kong:"help='Full URL to HTTP server (ex: https://example.com/some/path)',required"
	Url string `protobuf:"bytes,1,opt,name=url,proto3" json:"url,omitempty" kong:"help='Full URL to HTTP server (ex: https://example.com/some/path)',required"`
	// @gotags: kong:"help='Optional map of headers to pass on replay (--headers key1:value1,key2:value2..)'"
	Headers              map[string]string `protobuf:"bytes,2,rep,name=headers,proto3" json:"headers,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3" kong:"help='Optional map of headers to pass on replay (--headers key1:value1,key2:value2..)'"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *HTTPDestination) Reset()         { *m = HTTPDestination{} }
func (m *HTTPDestination) String() string { return proto.CompactTextString(m) }
func (*HTTPDestination) ProtoMessage()    {}
func (*HTTPDestination) Descriptor() ([]byte, []int) {
	return fileDescriptor_967a5fd002f4e9f3, []int{11}
}

func (m *HTTPDestination) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_HTTPDestination.Unmarshal(m, b)
}
func (m *HTTPDestination) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_HTTPDestination.Marshal(b, m, deterministic)
}
func (m *HTTPDestination) XXX_Merge(src proto.Message) {
	xxx_messageInfo_HTTPDestination.Merge(m, src)
}
func (m *HTTPDestination) XXX_Size() int {
	return xxx_messageInfo_HTTPDestination.Size(m)
}
func (m *HTTPDestination) XXX_DiscardUnknown() {
	xxx_messageInfo_HTTPDestination.DiscardUnknown(m)
}

var xxx_messageInfo_HTTPDestination proto.InternalMessageInfo

func (m *HTTPDestination) GetUrl() string {
	if m != nil {
		return m.Url
	}
	return ""
}

func (m *HTTPDestination) GetHeaders() map[string]string {
	if m != nil {
		return m.Headers
	}
	return nil
}

func init() {
	proto.RegisterEnum("protos.opts.BatchOutputType", BatchOutputType_name, BatchOutputType_value)
	proto.RegisterEnum("protos.opts.BatchReplayType", BatchReplayType_name, BatchReplayType_value)
	proto.RegisterType((*BatchOptions)(nil), "protos.opts.BatchOptions")
	proto.RegisterType((*BatchLoginOptions)(nil), "protos.opts.BatchLoginOptions")
	proto.RegisterType((*BatchLogoutOptions)(nil), "protos.opts.BatchLogoutOptions")
	proto.RegisterType((*BatchArchiveOptions)(nil), "protos.opts.BatchArchiveOptions")
	proto.RegisterType((*BatchArchiveReplayOptions)(nil), "protos.opts.BatchArchiveReplayOptions")
	proto.RegisterType((*BatchListOptions)(nil), "protos.opts.BatchListOptions")
	proto.RegisterType((*BatchCreateOptions)(nil), "protos.opts.BatchCreateOptions")
	proto.RegisterType((*BatchSearchOptions)(nil), "protos.opts.BatchSearchOptions")
	proto.RegisterType((*BatchCreateCollectionOptions)(nil), "protos.opts.BatchCreateCollectionOptions")
	proto.RegisterType((*BatchCreateReplayOptions)(nil), "protos.opts.BatchCreateReplayOptions")
	proto.RegisterType((*BatchCreateDestinationOptions)(nil), "protos.opts.BatchCreateDestinationOptions")
	proto.RegisterType((*HTTPDestination)(nil), "protos.opts.HTTPDestination")
	proto.RegisterMapType((map[string]string)(nil), "protos.opts.HTTPDestination.HeadersEntry")
}

func init() { proto.RegisterFile("opts/batch.proto", fileDescriptor_967a5fd002f4e9f3) }

var fileDescriptor_967a5fd002f4e9f3 = []byte{
	// 893 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x56, 0x6d, 0x6f, 0xdb, 0x54,
	0x14, 0xc6, 0x79, 0x6b, 0x7a, 0x92, 0x75, 0xe1, 0x6e, 0x42, 0x66, 0x6c, 0xa3, 0x78, 0x74, 0x82,
	0x4a, 0x4b, 0xa0, 0x20, 0xb1, 0x15, 0x86, 0xd4, 0x96, 0x69, 0x0b, 0x84, 0x84, 0xda, 0xa9, 0x26,
	0xf1, 0x25, 0xf2, 0xcb, 0x6d, 0x62, 0xc5, 0xce, 0x75, 0xec, 0xeb, 0x4d, 0xe9, 0x27, 0x7e, 0x0b,
	0xe2, 0x9f, 0xf0, 0x3f, 0xf8, 0x05, 0xfc, 0x88, 0xe9, 0x9e, 0x6b, 0x3b, 0x4e, 0x62, 0xf7, 0x53,
	0xee, 0x3d, 0xe7, 0x79, 0xce, 0xcb, 0x73, 0xce, 0xad, 0x0b, 0x1d, 0x16, 0xf0, 0xa8, 0x67, 0x99,
	0xdc, 0x9e, 0x75, 0x83, 0x90, 0x71, 0x46, 0x5a, 0xf8, 0x13, 0x75, 0x85, 0xe3, 0x81, 0x74, 0xbf,
	0x0f, 0x5d, 0x4e, 0xa5, 0x5b, 0xfb, 0xaf, 0x02, 0xed, 0x73, 0x01, 0x1f, 0x05, 0xdc, 0x65, 0x8b,
	0x88, 0x7c, 0x0f, 0x75, 0x8f, 0x4d, 0xdd, 0x85, 0xaa, 0x1c, 0x2a, 0x5f, 0xb5, 0x4e, 0x1e, 0x77,
	0x73, 0xfc, 0x2e, 0x22, 0x07, 0xc2, 0x9d, 0xc0, 0x75, 0x09, 0x26, 0x3f, 0x40, 0xc3, 0x63, 0x53,
	0x16, 0x73, 0xb5, 0x82, 0xb4, 0xcf, 0x0b, 0x69, 0x2c, 0xe6, 0x29, 0x2f, 0x81, 0x93, 0x6f, 0xa1,
	0xe6, 0xb9, 0x11, 0x57, 0xab, 0x48, 0x7b, 0x54, 0x40, 0x73, 0xa3, 0x8c, 0x84, 0x50, 0x91, 0xcb,
	0x0e, 0xa9, 0xc9, 0xa9, 0x5a, 0x2b, 0xcb, 0x75, 0x81, 0xfe, 0x2c, 0x97, 0x84, 0x0b, 0x62, 0x44,
	0xcd, 0xd0, 0x9e, 0xa9, 0xf5, 0x32, 0xa2, 0x81, 0xfe, 0x8c, 0x28, 0xe1, 0xe4, 0x14, 0xf6, 0xc4,
	0xaf, 0xfb, 0x8e, 0xaa, 0x0d, 0x64, 0x1e, 0xee, 0x32, 0xcf, 0x24, 0x20, 0xa5, 0xa6, 0x04, 0xed,
	0x1e, 0x7c, 0xbc, 0xa3, 0x9a, 0x76, 0x1f, 0xc8, 0xae, 0x26, 0xda, 0x15, 0xdc, 0x2b, 0x08, 0x45,
	0x7e, 0x86, 0x46, 0x48, 0x03, 0xcf, 0x5c, 0x25, 0x23, 0x79, 0x5a, 0x9a, 0x5c, 0x47, 0x58, 0x56,
	0xbd, 0x64, 0x69, 0xcf, 0xe1, 0xd3, 0x52, 0x10, 0xf9, 0x0c, 0xf6, 0x25, 0x6c, 0xe2, 0x3a, 0x18,
	0x7f, 0x5f, 0x6f, 0x4a, 0x43, 0xdf, 0xd1, 0xfe, 0x55, 0xa0, 0xb3, 0x3d, 0x04, 0xf2, 0x12, 0x5a,
	0x2c, 0xe6, 0x41, 0xcc, 0x27, 0x7c, 0x15, 0x50, 0xe4, 0x1c, 0x9c, 0x3c, 0xdc, 0xad, 0x69, 0x84,
	0xa0, 0xf1, 0x2a, 0xa0, 0x3a, 0xb0, 0xec, 0x4c, 0x1e, 0x03, 0xd8, 0xcc, 0xf3, 0xa8, 0x2d, 0xa2,
	0xe1, 0xb6, 0x34, 0xf5, 0x9c, 0x85, 0x1c, 0x42, 0xcb, 0xa1, 0x11, 0x77, 0x17, 0x26, 0x02, 0xaa,
	0x08, 0xc8, 0x9b, 0xc8, 0x27, 0x99, 0x1e, 0x35, 0x74, 0x26, 0x37, 0x61, 0x8f, 0xec, 0x19, 0xf5,
	0x4d, 0x1c, 0x6f, 0x53, 0x4f, 0x6e, 0xda, 0xff, 0x4a, 0xa2, 0xf6, 0xc6, 0x56, 0x90, 0xfe, 0x46,
	0x21, 0x52, 0xda, 0xaf, 0xcb, 0x56, 0xe9, 0x22, 0x43, 0xa6, 0xea, 0xe6, 0x6b, 0x7e, 0x99, 0x55,
	0x24, 0xb7, 0xff, 0xa8, 0x2c, 0x4c, 0xe1, 0x80, 0xc8, 0x60, 0xb7, 0xe5, 0xd6, 0xc9, 0x71, 0x59,
	0x8c, 0x5f, 0xd6, 0xd0, 0x34, 0x50, 0x9e, 0xae, 0x79, 0x49, 0xb7, 0x1b, 0xab, 0x4c, 0xee, 0x43,
	0x7d, 0x19, 0xd3, 0x70, 0x95, 0xcc, 0x58, 0x5e, 0xc8, 0x13, 0xb8, 0xb3, 0x6e, 0x43, 0x6c, 0x40,
	0x05, 0xbd, 0xed, 0xb5, 0xb1, 0xef, 0x88, 0x15, 0x09, 0xcc, 0x29, 0x9d, 0x44, 0xee, 0x0d, 0xc5,
	0xe2, 0xea, 0x7a, 0x53, 0x18, 0x0c, 0xf7, 0x86, 0x6a, 0x14, 0x1e, 0xde, 0x26, 0x13, 0x21, 0x50,
	0x5b, 0x98, 0x3e, 0x4d, 0xd2, 0xe2, 0x59, 0x04, 0x94, 0xa3, 0x59, 0x67, 0x6c, 0x4a, 0x43, 0xdf,
	0x11, 0x85, 0x2e, 0x18, 0xa7, 0x11, 0x66, 0xda, 0xd7, 0xe5, 0x45, 0xfb, 0xbb, 0x02, 0x6a, 0x99,
	0x8e, 0x85, 0x39, 0xbe, 0x81, 0x1a, 0xae, 0x67, 0xa5, 0x6c, 0x3d, 0x65, 0x08, 0x5c, 0x4f, 0x44,
	0x16, 0x27, 0xde, 0x55, 0xa8, 0x56, 0xa0, 0xd0, 0x11, 0x1c, 0xe4, 0x26, 0x20, 0x50, 0x75, 0x44,
	0xdd, 0xc9, 0x59, 0x65, 0x6b, 0x72, 0x06, 0x8d, 0xfc, 0x0c, 0x8e, 0xe0, 0xe0, 0x3a, 0x64, 0xfe,
	0x84, 0xbb, 0x3e, 0x8d, 0xb8, 0xe9, 0x07, 0xea, 0x9e, 0x24, 0x0b, 0xeb, 0x38, 0x35, 0x92, 0x2f,
	0xa0, 0xcd, 0x59, 0x0e, 0xd4, 0x44, 0x50, 0x8b, 0xb3, 0x0c, 0xa2, 0xfd, 0x55, 0x85, 0x47, 0xb7,
	0x2e, 0x4a, 0xa1, 0x52, 0x59, 0xdf, 0x95, 0x7c, 0xdf, 0x2f, 0xa0, 0x3e, 0x37, 0xaf, 0xe7, 0xa6,
	0xea, 0xe0, 0x36, 0x3e, 0xd9, 0x10, 0xf0, 0xad, 0xf8, 0x80, 0xbc, 0x0e, 0x59, 0x1c, 0xfc, 0x26,
	0x30, 0xd9, 0xb7, 0x00, 0x19, 0xe4, 0x27, 0x68, 0x84, 0xa6, 0x65, 0xb9, 0x5c, 0xa5, 0xc8, 0xfd,
	0xb2, 0x84, 0xab, 0x23, 0x68, 0xfd, 0x18, 0xf0, 0x4a, 0x06, 0xd0, 0x9e, 0xc7, 0x16, 0xf5, 0x97,
	0x93, 0x65, 0x4c, 0x63, 0xaa, 0x5e, 0x17, 0x3c, 0xcc, 0x5c, 0xfe, 0xd8, 0xa2, 0xbf, 0x5f, 0x5e,
	0x0a, 0x64, 0xf6, 0x18, 0x24, 0x1d, 0x6d, 0xa2, 0x16, 0xf3, 0x7d, 0x14, 0x2d, 0x23, 0x75, 0x7a,
	0x6b, 0x2d, 0x67, 0x6f, 0x0d, 0xe3, 0xd2, 0xc8, 0x6a, 0x91, 0x1c, 0xb1, 0x44, 0x33, 0xce, 0x03,
	0x75, 0x86, 0xdc, 0xcd, 0x25, 0x7a, 0x33, 0x1e, 0xff, 0x91, 0x53, 0x58, 0x47, 0xa4, 0xf6, 0x8f,
	0x02, 0x77, 0xb7, 0x3c, 0xa4, 0x03, 0xd5, 0x38, 0xf4, 0x12, 0xcd, 0xc5, 0x91, 0x5c, 0xc0, 0xde,
	0x8c, 0x9a, 0x0e, 0x0d, 0x85, 0xe8, 0xd5, 0x9d, 0xf6, 0xb6, 0x02, 0x74, 0xdf, 0x48, 0xec, 0xab,
	0x05, 0x0f, 0x57, 0x7a, 0xca, 0x7c, 0x70, 0x0a, 0xed, 0xbc, 0x43, 0xa4, 0x99, 0xd3, 0xf4, 0x7d,
	0x8b, 0xa3, 0x98, 0xec, 0x3b, 0xd3, 0x8b, 0x69, 0x3a, 0x59, 0xbc, 0x9c, 0x56, 0x9e, 0x2b, 0xc7,
	0x4f, 0xe1, 0xee, 0xd6, 0xdf, 0x68, 0xb2, 0x0f, 0xf5, 0xf1, 0xd9, 0xf9, 0xe0, 0x55, 0xe7, 0x23,
	0xd2, 0x84, 0xda, 0xaf, 0xc6, 0x68, 0xd8, 0x51, 0x8e, 0x9f, 0x25, 0xb8, 0xf5, 0x63, 0x21, 0x00,
	0x0d, 0xa3, 0x3f, 0x7c, 0x8d, 0xc0, 0x03, 0x80, 0x8b, 0xd1, 0x70, 0xdc, 0x1f, 0x5e, 0x8d, 0xae,
	0x8c, 0x8e, 0x72, 0xfe, 0xe3, 0x9f, 0x2f, 0xa6, 0x2e, 0x9f, 0xc5, 0x56, 0xd7, 0x66, 0xbe, 0xfc,
	0x2f, 0xc4, 0x66, 0x61, 0xd0, 0x0b, 0xbc, 0xd8, 0xb7, 0x68, 0xf8, 0x4c, 0x3e, 0xf2, 0xa8, 0x67,
	0xc5, 0xae, 0xe7, 0xf4, 0xa6, 0xac, 0x27, 0xbb, 0xee, 0x89, 0xae, 0xad, 0x06, 0x5e, 0xbe, 0xfb,
	0x10, 0x00, 0x00, 0xff, 0xff, 0xba, 0xbd, 0xf8, 0x8b, 0xc3, 0x08, 0x00, 0x00,
}