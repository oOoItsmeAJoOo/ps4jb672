var aio_init_addr = sys_670_addr;
var fpathconf_addr = sys_192_addr;
var dmem_container_addr = sys_586_addr;
var evf_clear_addr = sys_545_addr;
var kqueue_addr = sys_362_addr;
var kevent_addr = sys_363_addr;
var futimes_addr = sys_206_addr;
var open_addr = sys_5_addr;
var thr_self_addr = sys_432_addr;
var mkdir_addr = sys_136_addr;
var pipe_addr = sys_42_addr;
var stat_addr = sys_188_addr;
var write_addr = sys_4_addr;
var evf_cancel_addr = sys_546_addr;
var ktimer_delete_addr = sys_236_addr;
var setregid_addr = sys_127_addr;
var jitshm_create_addr = sys_533_addr;
var sigwait_addr = sys_429_addr;
var fdatasync_addr = sys_658_addr;
var sigtimedwait_addr = sys_345_addr;
var get_gpo_addr = sys_623_addr;
var sched_setscheduler_addr = sys_329_addr;
var osem_open_addr = sys_551_addr;
var dynlib_get_info_addr = sys_593_addr;
var osem_post_addr = sys_555_addr;
var blockpool_move_addr = sys_673_addr;
var issetugid_addr = sys_253_addr;
var getdents_addr = sys_272_addr;
var rtprio_thread_addr = sys_466_addr;
var evf_delete_addr = sys_539_addr;
var _umtx_op_addr = sys_454_addr;
var access_addr = sys_33_addr;
var reboot_addr = sys_55_addr;
var sigaltstack_addr = sys_53_addr;
var getcontext_addr = sys_421_addr;
var munmap_addr = sys_73_addr;
var setuid_addr = sys_23_addr;
var evf_trywait_addr = sys_543_addr;
var setcontext_addr = sys_422_addr;
var dynlib_get_list_addr = sys_592_addr;
var setsid_addr = sys_147_addr;
var fstatfs_addr = sys_397_addr;
var aio_multi_wait_addr = sys_663_addr;
var accept_addr = sys_30_addr;
var set_phys_fmem_limit_addr = sys_637_addr;
var thr_get_name_addr = sys_616_addr;
var get_page_table_stats_addr = sys_671_addr;
var sigsuspend_addr = sys_341_addr;
var truncate_addr = sys_479_addr;
var fsync_addr = sys_95_addr;
var execve_addr = sys_59_addr;
var evf_open_addr = sys_540_addr;
var netabort_addr = sys_101_addr;
var blockpool_unmap_addr = sys_655_addr;
var osem_create_addr = sys_549_addr;
var getlogin_addr = sys_49_addr;
var mincore_addr = sys_78_addr;
var shutdown_addr = sys_134_addr;
var profil_addr = sys_44_addr;
var preadv_addr = sys_289_addr;
var geteuid_addr = sys_25_addr;
var set_chicken_switches_addr = sys_643_addr;
var sigqueue_addr = sys_456_addr;
var aio_multi_poll_addr = sys_664_addr;
var get_self_auth_info_addr = sys_607_addr;
var opmc_enable_addr = sys_563_addr;
var aio_multi_delete_addr = sys_662_addr;
var rfork_addr = sys_251_addr;
var sys_exit_addr = sys_1_addr;
var blockpool_batch_addr = sys_657_addr;
var sigpending_addr = sys_343_addr;
var ktimer_gettime_addr = sys_238_addr;
var opmc_set_ctr_addr = sys_566_addr;
var ksem_wait_addr = sys_402_addr;
var sched_getparam_addr = sys_328_addr;
var swapcontext_addr = sys_423_addr;
var opmc_get_ctr_addr = sys_567_addr;
var budget_get_ptype_addr = sys_610_addr;
var msync_addr = sys_65_addr;
var sigwaitinfo_addr = sys_346_addr;
var lstat_addr = sys_190_addr;
var test_debug_rwmem_addr = sys_619_addr;
var evf_create_addr = sys_538_addr;
var madvise_addr = sys_75_addr;
var cpuset_getaffinity_addr = sys_487_addr;
var evf_set_addr = sys_544_addr;
var setlogin_addr = sys_50_addr;
var ksem_init_addr = sys_404_addr;
var opmc_disable_addr = sys_564_addr;
var namedobj_delete_addr = sys_558_addr;
var gettimeofday_addr = sys_116_addr;
var read_addr = sys_3_addr;
var thr_get_ucontext_addr = sys_634_addr;
var batch_map_addr = sys_548_addr;
var sysarch_addr = sys_165_addr;
var utc_to_localtime_addr = sys_638_addr;
var evf_close_addr = sys_541_addr;
var setrlimit_addr = sys_195_addr;
var getpeername_addr = sys_31_addr;
var aio_get_data_addr = sys_665_addr;
var lseek_addr = sys_478_addr;
var connect_addr = sys_98_addr;
var recvfrom_addr = sys_29_addr;
var getrlimit_addr = sys_194_addr;
var dynlib_get_info_for_libdbg_addr = sys_656_addr;
var thr_suspend_ucontext_addr = sys_632_addr;
var _umtx_op_addr = sys_454_addr;
var kill_addr = sys_37_addr;
var dynlib_process_needed_and_relocate_addr = sys_599_addr;
var getsockname_addr = sys_32_addr;
var osem_trywait_addr = sys_554_addr;
var execve_addr = sys_59_addr;
var flock_addr = sys_131_addr;
var sigreturn_addr = sys_417_addr;
var query_memory_protection_addr = sys_547_addr;
var pwrite_addr = sys_476_addr;
var get_map_statistics_addr = sys_642_addr;
var ksem_getvalue_addr = sys_407_addr;
var sendfile_addr = sys_393_addr;
var socketex_addr = sys_113_addr;
var unlink_addr = sys_10_addr;
var thr_resume_ucontext_addr = sys_633_addr;
var dl_get_list_addr = sys_535_addr;
var cpuset_setaffinity_addr = sys_488_addr;
var clock_gettime_addr = sys_232_addr;
var thr_kill2_addr = sys_481_addr;
var set_timezone_info_addr = sys_636_addr;
var select_addr = sys_93_addr;
var pselect_addr = sys_522_addr;
var sync_addr = sys_36_addr;
var socketpair_addr = sys_135_addr;
var get_kernel_mem_statistics_addr = sys_646_addr;
var virtual_query_all_addr = sys_674_addr;
var physhm_open_addr = sys_629_addr;
var getuid_addr = sys_24_addr;
var revoke_addr = sys_56_addr;
var sigprocmask_addr = sys_340_addr;
var setegid_addr = sys_182_addr;
var cpuset_getid_addr = sys_486_addr;
var evf_wait_addr = sys_542_addr;
var sched_get_priority_max_addr = sys_332_addr;
var sigaction_addr = sys_416_addr;
var ipmimgr_call_addr = sys_622_addr;
var aio_submit_cmd_addr = sys_669_addr;
var free_stack_addr = sys_620_addr;
var settimeofday_addr = sys_122_addr;
var recvmsg_addr = sys_27_addr;
var aio_submit_addr = sys_661_addr;
var setgroups_addr = sys_80_addr;
var aio_multi_cancel_addr = sys_666_addr;
var nanosleep_addr = sys_240_addr;
var blockpool_map_addr = sys_654_addr;
var thr_create_addr = sys_430_addr;
var munlockall_addr = sys_325_addr;
var dynlib_get_info_ex_addr = sys_608_addr;
var pwritev_addr = sys_290_addr;
var mname_addr = sys_588_addr;
var regmgr_call_addr = sys_532_addr;
var getgroups_addr = sys_79_addr;
var osem_close_addr = sys_552_addr;
var osem_delete_addr = sys_550_addr;
var dynlib_get_obj_member_addr = sys_649_addr;
var debug_init_addr = sys_560_addr;
var mmap_dmem_addr = sys_628_addr;
var kldunloadf_addr = sys_444_addr;
var mprotect_addr = sys_74_addr;
var ksem_trywait_addr = sys_403_addr;
var ksem_close_addr = sys_400_addr;
var sched_rr_get_interval_addr = sys_334_addr;
var getitimer_addr = sys_86_addr;
var getpid_addr = sys_20_addr;
var netgetsockinfo_addr = sys_102_addr;
var get_cpu_usage_all_addr = sys_627_addr;
var eport_delete_addr = sys_581_addr;
var randomized_path_addr = sys_602_addr;
var jitshm_alias_addr = sys_534_addr;
var seteuid_addr = sys_183_addr;
var set_uevt_addr = sys_640_addr;
var clock_getres_addr = sys_234_addr;
var setitimer_addr = sys_83_addr;
var thr_exit_addr = sys_431_addr;
var sandbox_path_addr = sys_600_addr;
var thr_kill_addr = sys_433_addr;
var sys_exit_addr = sys_1_addr;
var dup2_addr = sys_90_addr;
var utimes_addr = sys_138_addr;
var pread_addr = sys_475_addr;
var dl_get_info_addr = sys_536_addr;
var ktimer_settime_addr = sys_237_addr;
var sched_setparam_addr = sys_327_addr;
var aio_create_addr = sys_668_addr;
var osem_wait_addr = sys_553_addr;
var dynlib_get_list_for_libdbg_addr = sys_672_addr;
var get_proc_type_info_addr = sys_612_addr;
var getgid_addr = sys_47_addr;
var fstat_addr = sys_189_addr;
var fork_addr = sys_2_addr;
var namedobj_create_addr = sys_557_addr;
var opmc_set_ctl_addr = sys_565_addr;
var get_resident_count_addr = sys_613_addr;
var getdirentries_addr = sys_196_addr;
var getrusage_addr = sys_117_addr;
var setreuid_addr = sys_126_addr;
var wait4_addr = sys_7_addr;
var __sysctl_addr = sys_202_addr;
var bind_addr = sys_104_addr;
var sched_yield_addr = sys_331_addr;
var dl_get_metadata_addr = sys_604_addr;
var get_resident_fmem_count_addr = sys_615_addr;
var setsockopt_addr = sys_105_addr;
var dynlib_load_prx_addr = sys_594_addr;
var getpriority_addr = sys_100_addr;
var get_phys_page_size_addr = sys_677_addr;
var opmc_set_hw_addr = sys_625_addr;
var dynlib_do_copy_relocations_addr = sys_596_addr;
var netcontrol_addr = sys_99_addr;
var ksem_post_addr = sys_401_addr;
var netgetiflist_addr = sys_125_addr;
var chmod_addr = sys_15_addr;
var aio_suspend_addr = sys_315_addr;
var ksem_timedwait_addr = sys_441_addr;
var dynlib_dlsym_addr = sys_591_addr;
var get_paging_stats_of_all_objects_addr = sys_618_addr;
var osem_cancel_addr = sys_556_addr;
var writev_addr = sys_121_addr;
var ktimer_getoverrun_addr = sys_239_addr;
var rmdir_addr = sys_137_addr;
var sched_get_priority_min_addr = sys_333_addr;
var dynlib_unload_prx_addr = sys_595_addr;
var thr_set_name_addr = sys_464_addr;
var mlockall_addr = sys_324_addr;
var openat_addr = sys_499_addr;
var eport_open_addr = sys_583_addr;
var sigprocmask_addr = sys_340_addr;
var chdir_addr = sys_12_addr;
var physhm_unlink_addr = sys_630_addr;
var mtypeprotect_addr = sys_379_addr;
var thr_wake_addr = sys_443_addr;
var blockpool_open_addr = sys_653_addr;
var thr_new_addr = sys_455_addr;
var munlock_addr = sys_204_addr;
var fchflags_addr = sys_35_addr;
var ftruncate_addr = sys_480_addr;
var rename_addr = sys_128_addr;
var poll_addr = sys_209_addr;
var eport_trigger_addr = sys_582_addr;
var getsid_addr = sys_310_addr;
var virtual_query_addr = sys_572_addr;
var fchmod_addr = sys_124_addr;
var _umtx_unlock_addr = sys_435_addr;
var mmap_addr = sys_477_addr;
var ktimer_create_addr = sys_235_addr;
var dup_addr = sys_41_addr;
var sendmsg_addr = sys_28_addr;
var close_addr = sys_6_addr;
var is_development_mode_addr = sys_606_addr;
var getegid_addr = sys_43_addr;
var get_vm_map_timestamp_addr = sys_624_addr;
var dynlib_get_proc_param_addr = sys_598_addr;
var fcntl_addr = sys_92_addr;
var getppid_addr = sys_39_addr;
var readv_addr = sys_120_addr;
var rdup_addr = sys_603_addr;
var listen_addr = sys_106_addr;
var app_state_change_addr = sys_648_addr;
var set_gpo_addr = sys_617_addr;
var ksem_unlink_addr = sys_406_addr;
var get_cpu_usage_proc_addr = sys_641_addr;
var shm_unlink_addr = sys_483_addr;
var reserve_2mb_page_addr = sys_675_addr;
var dynlib_get_info2_addr = sys_660_addr;
var mlock_addr = sys_203_addr;
var workaround8849_addr = sys_605_addr;
var get_sdk_compiled_version_addr = sys_647_addr;
var clock_settime_addr = sys_233_addr;
var ksem_destroy_addr = sys_408_addr;
var ksem_open_addr = sys_405_addr;
var thr_set_ucontext_addr = sys_635_addr;
var get_bio_usage_all_addr = sys_667_addr;
var getdtablesize_addr = sys_89_addr;
var chflags_addr = sys_34_addr;
var shm_open_addr = sys_482_addr;
var eport_close_addr = sys_584_addr;
var dynlib_get_list2_addr = sys_659_addr;
var socketclose_addr = sys_114_addr;
var sched_getscheduler_addr = sys_330_addr;
var pathconf_addr = sys_191_addr;
var localtime_to_utc_addr = sys_639_addr;
var setpriority_addr = sys_96_addr;
var cpumode_yield_addr = sys_676_addr;
var process_terminate_addr = sys_652_addr;
var ioctl_addr = sys_54_addr;
var opmc_get_hw_addr = sys_626_addr;
var eport_create_addr = sys_580_addr;
var socket_addr = sys_97_addr;
var _umtx_lock_addr = sys_434_addr;
var thr_suspend_addr = sys_442_addr;
var is_in_sandbox_addr = sys_585_addr;
var get_authinfo_addr = sys_587_addr;
var mdbg_service_addr = sys_601_addr;
var getsockopt_addr = sys_118_addr;
var get_paging_stats_of_all_threads_addr = sys_611_addr;
var adjtime_addr = sys_140_addr;
var kqueueex_addr = sys_141_addr;
var uuidgen_addr = sys_392_addr;
var set_vm_container_addr = sys_559_addr;
var sendto_addr = sys_133_addr;
load_JB();