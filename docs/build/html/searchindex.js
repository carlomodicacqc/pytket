Search.setIndex({docnames:["backends","changelog","circuit","circuit_class","cirq","forest_backend","getting_started","ibm_backend","index","optype","projectq","projectq_backend","pyquil","pyzx","qasm","qiskit","routing","transform"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["backends.rst","changelog.rst","circuit.rst","circuit_class.rst","cirq.rst","forest_backend.rst","getting_started.rst","ibm_backend.rst","index.rst","optype.rst","projectq.rst","projectq_backend.rst","pyquil.rst","pyzx.rst","qasm.rst","qiskit.rst","routing.rst","transform.rst"],objects:{"pytket._circuit":{Circuit:[3,1,1,""],Command:[2,1,1,""],OpType:[9,1,1,""],exponent_to_2qb_circuit:[2,3,1,""],fresh_symbol:[2,3,1,""],unitary_to_2qb_circuit:[2,3,1,""]},"pytket._circuit.Circuit":{CCX:[3,2,1,""],CH:[3,2,1,""],CRz:[3,2,1,""],CSWAP:[3,2,1,""],CX:[3,2,1,""],CY:[3,2,1,""],CZ:[3,2,1,""],H:[3,2,1,""],Measure:[3,2,1,""],Rx:[3,2,1,""],Ry:[3,2,1,""],Rz:[3,2,1,""],S:[3,2,1,""],SWAP:[3,2,1,""],Sdg:[3,2,1,""],T:[3,2,1,""],Tdg:[3,2,1,""],X:[3,2,1,""],Y:[3,2,1,""],Z:[3,2,1,""],ZZPhase:[3,2,1,""],__init__:[3,2,1,""],__iter__:[3,2,1,""],__mul__:[3,2,1,""],__repr__:[3,2,1,""],__rshift__:[3,2,1,""],add_bit:[3,2,1,""],add_blank_wires:[3,2,1,""],add_c_register:[3,2,1,""],add_circbox:[3,2,1,""],add_circuit:[3,2,1,""],add_gate:[3,2,1,""],add_measure:[3,2,1,""],add_operation:[3,2,1,""],add_q_register:[3,2,1,""],add_qubit:[3,2,1,""],add_unitarybox:[3,2,1,""],append:[3,2,1,""],bits:[3,2,1,""],copy:[3,2,1,""],dagger:[3,2,1,""],depth:[3,2,1,""],depth_by_type:[3,2,1,""],flatten_registers:[3,2,1,""],get_commands:[3,2,1,""],is_simple:[3,2,1,""],measure_all:[3,2,1,""],n_gates:[3,2,1,""],n_gates_of_type:[3,2,1,""],n_qubits:[3,2,1,""],qubits:[3,2,1,""],remove_blank_wires:[3,2,1,""],symbol_substitution:[3,2,1,""]},"pytket._circuit.Command":{bits:[2,2,1,""],controls:[2,2,1,""],op:[2,2,1,""],qubits:[2,2,1,""]},"pytket._circuit.OpType":{name:[9,2,1,""]},"pytket._routing":{Architecture:[16,1,1,""],PhysicalCircuit:[16,1,1,""],SquareGrid:[16,1,1,""],line_placement:[16,3,1,""],noise_aware_placement:[16,3,1,""],route:[16,3,1,""]},"pytket._routing.Architecture":{__init__:[16,2,1,""]},"pytket._routing.PhysicalCircuit":{copy:[16,2,1,""],decompose_BRIDGE_gates:[16,2,1,""],decompose_SWAP_gates:[16,2,1,""],decompose_SWAP_to_CX:[16,2,1,""],depth:[16,2,1,""],depth_by_type:[16,2,1,""],get_commands:[16,2,1,""],n_gates:[16,2,1,""],n_gates_of_type:[16,2,1,""],n_qubits:[16,2,1,""],redirect_CX_gates:[16,2,1,""]},"pytket._routing.SquareGrid":{__init__:[16,2,1,""],qind_to_squind:[16,2,1,""],squind_to_qind:[16,2,1,""]},"pytket._transform":{Transform:[17,1,1,""]},"pytket._transform.Transform":{CommuteThroughMultis:[17,2,1,""],DecomposeCCX:[17,2,1,""],DecomposeControlledRys:[17,2,1,""],KAKDecomposition:[17,2,1,""],OptimiseCliffords:[17,2,1,""],OptimiseCliffordsZX:[17,2,1,""],OptimisePauliGadgets:[17,2,1,""],OptimisePhaseGadgets:[17,2,1,""],OptimisePostRouting:[17,2,1,""],RebaseToCirq:[17,2,1,""],RebaseToCliffordSingles:[17,2,1,""],RebaseToMaryland:[17,2,1,""],RebaseToProjectQ:[17,2,1,""],RebaseToPyZX:[17,2,1,""],RebaseToQiskit:[17,2,1,""],RebaseToQuil:[17,2,1,""],RebaseToRzRx:[17,2,1,""],ReduceSingles:[17,2,1,""],RemoveRedundancies:[17,2,1,""],apply:[17,2,1,""],repeat:[17,2,1,""],sequence:[17,2,1,""],while_repeat:[17,2,1,""]},"pytket.backends":{Backend:[0,1,1,""],forest:[5,0,0,"-"],ibm:[7,0,0,"-"],projectq:[11,0,0,"-"]},"pytket.backends.Backend":{__init__:[0,2,1,""],__weakref__:[0,4,1,""],get_counts:[0,2,1,""],get_operator_expectation_value:[0,2,1,""],get_pauli_expectation_value:[0,2,1,""],run:[0,2,1,""]},"pytket.backends.forest":{ForestBackend:[5,1,1,""]},"pytket.backends.forest.ForestBackend":{__init__:[5,2,1,""],run:[5,2,1,""]},"pytket.backends.ibm":{AerBackend:[7,1,1,""],AerStateBackend:[7,1,1,""],AerUnitaryBackend:[7,1,1,""],IBMQBackend:[7,1,1,""]},"pytket.backends.ibm.AerBackend":{__init__:[7,2,1,""],get_counts:[7,2,1,""],get_counts_batch:[7,2,1,""],run:[7,2,1,""]},"pytket.backends.ibm.AerStateBackend":{__init__:[7,2,1,""],get_operator_expectation_value:[7,2,1,""],get_pauli_expectation_value:[7,2,1,""],get_state:[7,2,1,""],run:[7,2,1,""]},"pytket.backends.ibm.AerUnitaryBackend":{__init__:[7,2,1,""],get_unitary:[7,2,1,""],run:[7,2,1,""]},"pytket.backends.ibm.IBMQBackend":{__init__:[7,2,1,""],get_counts:[7,2,1,""],get_counts_batch:[7,2,1,""],run:[7,2,1,""]},"pytket.backends.projectq":{ProjectQBackend:[11,1,1,""]},"pytket.backends.projectq.ProjectQBackend":{get_operator_expectation_value:[11,2,1,""],get_pauli_expectation_value:[11,2,1,""],run:[11,2,1,""]},"pytket.cirq":{cirq_to_tk:[4,3,1,""],get_grid_qubits:[4,3,1,""],tk_to_cirq:[4,3,1,""],xmon_to_arc:[4,3,1,""]},"pytket.projectq":{tk_to_projectq:[10,3,1,""],tketBackendEngine:[10,1,1,""],tketOptimiser:[10,1,1,""]},"pytket.projectq.tketBackendEngine":{circuit:[10,2,1,""],is_available:[10,2,1,""],receive:[10,2,1,""]},"pytket.projectq.tketOptimiser":{receive:[10,2,1,""]},"pytket.pyquil":{pyquil_to_tk:[12,3,1,""],tk_to_pyquil:[12,3,1,""]},"pytket.pyzx":{pyzx_to_tk:[13,3,1,""],tk_to_pyzx:[13,3,1,""]},"pytket.qasm":{circuit_from_qasm:[14,3,1,""],circuit_to_qasm:[14,3,1,""]},"pytket.qiskit":{TketPass:[15,1,1,""],qiskit_to_tk:[15,3,1,""],tk_to_qiskit:[15,3,1,""]},"pytket.qiskit.TketPass":{run:[15,2,1,""]},pytket:{_circuit:[2,0,0,"-"],_routing:[16,0,0,"-"],_transform:[17,0,0,"-"],backends:[0,0,0,"-"],cirq:[4,0,0,"-"],projectq:[10,0,0,"-"],pyquil:[12,0,0,"-"],pyzx:[13,0,0,"-"],qasm:[14,0,0,"-"],qiskit:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"4x4":[1,2],"abstract":[0,3,6],"break":6,"class":[0,2,3,4,5,7,9,10,11,15,16,17],"default":[0,2,3,5,6,7,10,11],"enum":9,"export":[1,14,17],"float":[3,11,16],"function":[1,3,16,17],"import":[1,3,6,14],"int":[0,3,4,5,7,11,16],"new":[1,2,3,6,17],"return":[0,1,2,3,4,5,7,10,11,12,13,15,16,17],"true":[0,5,7,10,11,15,17],"try":5,"while":17,CXs:17,For:[6,8],Not:9,One:6,QCS:[1,5,6],Rys:17,The:[0,2,3,4,5,7,10,11,12,13,15,16,17],There:6,These:[3,6,9],Use:7,Used:9,Will:3,__init__:[0,3,5,7,16],__iter__:3,__mul__:3,__repr__:3,__rshift__:3,__weakref__:0,_circuit:[0,4,5,7,8,10,11,12,13,14,15,16,17],_main:10,_qubit:10,_rout:[4,6,8,10,12,13,17],_transform:[6,8],abil:[6,14],accept:6,access:16,accord:[3,6],account:7,accumul:[0,6,7],accur:[0,7],act:[2,6,14],action:6,active_reset:12,add:[3,6],add_bit:3,add_blank_wir:3,add_c_regist:3,add_circbox:3,add_circuit:[1,3],add_gat:3,add_measur:3,add_oper:3,add_q_regist:3,add_qubit:3,add_unitarybox:3,added:[1,6],adding:6,addit:[1,6,8],adjac:6,adjoint:3,advanc:6,advantag:1,aer:7,aerbackend:[1,7],aerstatebackend:[7,11],aerunitarybackend:[1,7],affect:6,after:[1,17],again:14,agnost:6,all:[3,6,12,13,14,16,17],alloc:1,allow:[1,6,8,17],along:16,alongsid:1,alpha:9,alreadi:3,also:6,although:14,alwai:6,analys:1,angl:[3,6,17],ani:[3,6,14,17],anonym:6,anoth:6,api:[1,2,6,8,17],append:[1,3,6,10],appli:[3,6,9,17],applic:17,appropri:[2,6],aqua:[1,6],arbitrari:9,arbitrarili:17,arc:[4,6],architectur:[1,3,4,5,6,8,16],arg0:3,arg:[3,10,16,17],argument:3,ariti:3,arrai:7,arrang:16,arxiv:17,ask:10,assum:[3,6,10],attach:6,attempt:[8,17],automat:[6,9,16],avail:[1,8,9,10],awar:1,back:15,backend:[1,8,10,15],backend_nam:7,balanc:17,base:16,basebackend:15,basi:[0,3,5,6,7,9,11],basic:[1,13,17],basicengin:10,been:[1,2,6,7],befor:[1,6,13],behaviour:[1,3],being:6,beta:9,between:[4,6,10,12,13,15,16,17],binari:[2,6,8,16],bit:[2,3,6],bit_index:3,bitvector:[0,7],blank:[3,6],blob:9,bodi:17,bool:[0,5,7,11,12,15,17],both:[3,6,14],box_unknown:15,bridg:16,bug:[1,6],build:6,c_bit:3,c_dg:6,c_sub:6,calcul:[0,7,11],call:6,can:[0,1,6,8,10,14,16],capsul:3,cartan:17,ccx:[3,9,17],cengin:10,chain:1,chang:[0,1,6,7,11,17],changelog:8,check:[3,10],chemistri:1,cicuit:16,circ:14,circbox:[3,9],circuit:[0,1,2,4,5,7,8,9,10,11,12,13,14,15,16,17],circuit_from_qasm:14,circuit_to_qasm:14,cirq:[1,6,8,9],cirq_to_tk:4,classic:[1,3,6,9],clifford:17,cloud:6,cmd:10,cnot:1,cnry:9,cnx:9,collat:6,collect:[3,6,17],column:[0,5,7,11,16],com:[1,9],combin:[3,17],come:9,command:[1,2,3,10,16],command_list:10,common:6,commut:17,commutethroughmulti:17,compat:9,compil:[0,1,5,7,8,9,11,15],complet:3,complex128:2,complex:7,complic:9,compos:17,composit:3,comput:[3,6,16],cond:17,condit:[1,3,17],configur:6,conform:6,conjunct:8,connect:[0,3,5,6,7,16],consid:6,consist:[1,3,6],constraint:[0,5,6,7,11,16],construct:[1,3,6],constructor:16,consumpt:6,contain:4,content:8,control:[1,2,3,6,9,17],control_qubit:3,conveni:14,convers:[1,4,10,12,13,15],convert:[2,4,10,12,13,14,15,16,17],copi:[3,6,16],core:8,correct:[7,9],correspond:[0,3,4,5,7,11,16,17],count:[0,2,7],coupl:6,cowtan:17,cqc:8,creat:[3,6],crz:[3,9],cswap:[1,3,9],cu1:9,cu3:9,current:[2,6,8,12,13,14],custom:[1,14],dag:[3,15,16],dagcircuit:[1,15],dagger:[3,6,9],data:2,date:6,decoher:6,decompos:[1,7,16,17],decompose_bridge_g:16,decompose_swap_g:16,decompose_swap_to_cx:[6,16],decomposeccx:17,decomposecontrolledri:17,decomposit:[1,17],defin:[0,2,6,9,16],depth:[3,6,8,16],depth_by_typ:[3,16],depth_limit:16,describ:16,descript:6,design:10,desir:2,detail:[5,17],devic:[0,1,4,5,6,7,8,16],diagram:17,dict:[3,16],dictionari:[0,7],differ:6,dilk:17,direct:16,directli:[0,1,5,6,7,11],distinct:6,distrib_expon:16,distrib_limit:16,doc:[1,5],document:1,doe:6,done:8,down:6,download:8,drop_cond:15,duncan:17,dure:[2,6,16],each:[0,3,5,6,7,8,11,17],edg:16,empti:3,enabl:[1,6],encapsul:[3,6],end:[3,6,9],endian:3,energi:6,engin:[6,10],entir:17,environ:6,equival:[3,6,9],etc:6,eumen:1,exampl:[1,6,8],except:10,execut:10,exist:6,expans:1,expect:[0,7,11],experi:6,exploit:6,expon:1,exponent_to_2qb_circuit:2,expos:1,express:3,extra:1,facil:6,fagan:17,fail:3,fals:[12,15,17],fast:17,faster:[7,11],featur:[1,6,8],fewer:6,fidel:6,file:[3,14],fill:3,find:2,first:16,first_control:3,first_qubit:3,first_target:3,fit:[0,7,11],fit_to_constraint:[0,5,7,11],fix:[1,3,6],flag:6,flatten_regist:3,flush:10,focuss:6,follow:[6,17],forc:7,forest:[0,8],forestbackend:[1,5],forgot:10,form:[2,6,16,17],format:14,found:6,frac:9,fresh_symbol:2,from:[0,1,3,5,6,7,8,10,11,14,16,17],front:17,full:1,further:[6,17],gadget:17,gate:[1,3,6,7,9,10,13,14,16,17],gener:[1,4,6,14],get:4,get_command:[3,16],get_count:[0,7],get_counts_batch:7,get_grid_qubit:4,get_operator_expectation_valu:[0,7,11],get_pauli_expectation_valu:[0,7,11],get_stat:7,get_unitari:7,getting_start:3,github:[1,6,9],give:17,given:[2,3,4,6,7,10,15,16,17],global:[2,9,16],going:1,good:6,googl:[1,4,6,8],gradual:6,graph:6,grid:[4,16],grid_qubit:4,gridqubit:4,guarante:2,hadamard:[3,6,9],half:[3,6],halfturn:3,handl:9,hardwar:6,has:[1,2,3,6,7,10],have:[3,6],help:[0,7],heterogen:6,high:6,higher:8,how:6,howev:[6,14],http:[1,9],hub:7,ibm:[0,1,6,8,9,15],ibmq:7,ibmq_16_melbourn:7,ibmqbackend:7,ibmqx4:7,idea:6,ident:[3,6,9,16,17],identifi:[6,17],ids:3,imperfect:6,implement:[1,10,17],improv:1,includ:[1,8,14],increas:16,independ:6,index:[4,6,8,16],indexed_qubit:4,indic:[3,6,16],individu:17,inform:[6,9],initi:[0,7,16],initial_map:16,input:[3,4,6,9,16],input_circuit:16,input_fil:14,insert:6,inspect:[1,7],instal:[2,6,8,16],instruct:6,integ:3,interact:[2,6],interaction_limit:16,interest:[3,16],interfac:[1,17],intermedi:6,interoper:6,interpret:[6,14],interven:3,introduc:[1,6],introduct:[3,8],intuit:17,invers:[3,6,17],ipynb:9,is_avail:10,is_last_engin:10,is_simpl:3,iswap:9,iter:[3,4,7,17],its:6,job:7,jupyt:6,kak:17,kakdecomposit:17,keep:6,ket:[1,2,4,6,8,9,10,12,13,14,15,16,17],kwarg:[3,16,17],label:16,lambda:9,languag:6,larger:6,lastengineexcept:10,lattic:16,least:[7,17],length:3,less:6,level:6,librari:14,likewis:3,line_plac:16,linux:8,list:[0,3,4,10,16,17],littl:3,live:6,local:10,logic:[6,16],longer:17,longest:3,look:6,loop:17,machin:6,maco:8,made:[1,6,17],mai:[3,6],mainengin:10,make:[6,14],manag:6,mani:[1,6],manipul:[1,6],map:[0,3,6,7,16],master:9,mat:17,match:[3,16],mathrm:[2,4,6,9,10,12,13,14,15,16,17],matric:1,matrix:[2,9],mean:[3,6],measur:[0,1,3,6,7,9,11],measure_al:3,meet:[0,5,7,11],member:9,memori:6,merg:17,method:[6,7,11,14,16,17],minim:2,minor:1,model:[1,7],modifi:[6,15,16],modul:[1,2,4,8,10,12,13,15,16,17],monitor:7,more:[1,5,6,8,9,17],move:17,multi:[6,17],multipl:[1,6,9],multiqubit:17,must:[3,8],n_bit:3,n_column:16,n_gate:[3,16],n_gates_of_typ:[3,16],n_qubit:[3,16],n_row:16,name:[1,2,3,5,6,7,9,15],ndarrai:[0,2,5,7,11],need:[6,8],neighbour:6,next:10,nice:6,nisq:6,node:[4,6,16],nois:[1,6,7,16],noise_aware_plac:16,noise_model:7,noisemodel:7,noisi:6,non:[3,17],none:[3,4,7,10,16],noop:9,notat:1,note:[7,8,9,11,12],notebook:6,notimplementederror:4,number:[0,3,5,6,7,11,16,17],numer:6,numpi:[0,2,5,7,11],object:[0,2,3,4,6,9,14],observ:[0,6,7],obtain:7,occur:[3,6],often:6,older:6,omit:[0,7],one:[6,15,17],onli:[3,6],onto:[3,6],open:[3,6],openfermion:[0,7,11],openqasm:[6,14],oper:[0,2,3,4,6,7,9,11,12,13,14,16,17],ops:4,optimis:[1,3,6,10,15,17],optimiseclifford:17,optimisecliffordszx:17,optimisepauligadget:17,optimisephasegadget:[6,17],optimisepostrout:[6,17],option:[0,1,7,11],optyp:[2,3,8,16],order:[0,3,5,6,7,11],orient:17,origin:6,other:[6,8,10,14],otim:9,out:3,outcom:3,output:[0,3,6,9],output_fil:14,over:[0,6,7,11],overload:[3,16,17],packag:[1,6,8],page:8,pair:[3,6,16,17],pairwis:17,parallel:3,param:[3,16],paramet:[0,1,2,3,4,5,7,10,11,12,13,14,15,16,17],parameteris:[3,6],parser:14,part:[1,6],particular:[3,5,14,16],pass:[1,6,10,15,17],past:17,patch:1,path:3,pauli:[0,7,9,11,17],per:0,perfect:6,perform:[1,3,6,16,17],perman:9,permut:6,perspect:6,phase:[2,9,17],phasedx:[9,17],phi:9,physic:[5,6,16],physicalcircuit:[4,6,10,12,13,16,17],pip:[6,8],place:[3,17],placement:[1,6,17],platform:[5,6,8],plug:[1,15],popular:6,posit:6,possibl:6,potenti:16,power:[1,6],prefer:2,prepar:[0,7,11],preserv:[6,17],primit:[1,4,10,12,13,15],problem:6,procedur:[1,6],process:[6,10],produc:[0,3,6,17],prog:[12,13],program:[6,8,12],project:[8,9],projectq:[0,1,6,8,17],projectqbackend:[7,11],properti:[2,3,9,10,16],proport:6,provid:[2,3,4,6,7,15,16],pure:[3,6],put:3,pypi:[2,6,8,16],pyquil:[1,5,6,8],pyquil_to_tk:12,python3:8,python:[2,6,8,17],pytket:[1,6],pytket_cirq:6,pytket_projectq:6,pytket_pyquil:6,pytket_pyzx:6,pytket_qiskit:[1,6],pyzx:[1,6,8,17],pyzx_circ:13,pyzx_circuit_nam:13,pyzx_to_tk:13,qasm:[1,7,8],qbit_index:3,qc_name:5,qcirc:15,qelib1:14,qid:4,qind_to_squind:16,qiskit:[1,6,7,8,9],qiskit_to_tk:15,qregist:3,quantomat:1,quantum:[0,1,2,3,6,7,8,17],quantumcircuit:[1,15],quantumcomput:5,qubit0:3,qubit1:3,qubit:[0,1,2,3,4,5,6,7,9,11,16,17],qubit_0:3,qubit_1:3,qubitmap:16,qubitoper:[0,7,11],quick:8,quil:12,qureg:10,qvm:[1,5],radian:6,rais:[4,7,10],random:7,rang:6,rangl:[2,4,6,9,10,12,13,14,15,16,17],rather:[1,3,6],raw_typ:4,readabl:[2,3],readout:6,rearrang:6,rebas:17,rebasetocirq:17,rebasetocliffordsingl:17,rebasetomaryland:17,rebasetoprojectq:17,rebasetopyzx:17,rebasetoqiskit:17,rebasetoquil:17,rebasetorzrx:17,receiv:10,recognis:3,recommend:[6,8],redirect:16,redirect_cx_g:[6,16],reduc:[3,6,17],reducesingl:17,refactor:1,refer:[0,3,6,8,16],regist:[1,3,6,9,14],regnam:6,remot:7,remov:[1,3,17],remove_blank_wir:3,removeredund:17,repeat:[0,5,7,11,17],repeatedli:17,replac:[16,17],replacement_circuit:16,repositori:6,repres:[2,9,16,17],represent:[3,16],requir:[3,6,8,9],respect:[2,3,16],restrict:6,result:[0,3,5,6,7,11,17],resynthesis:17,retarget:6,rewrit:[1,6,17],rigett:1,rigetti:[1,5,6,8,12],risc:6,rotat:[3,6,17],rout:[1,3,6,15,16,17],routed_circuit:6,row:[0,5,7,11,16],rst:3,rule:[6,9,17],run:[0,1,5,6,7,8,11,13,15,17],sacrific:6,sadli:6,safe:[1,6,17],same:[3,6],satisfi:[1,6,16],save:14,scale:6,sdg:[3,9,17],sdk:6,search:[3,8,16],second_control:3,second_qubit:3,second_target:3,see:[0,5,6,7,8,9,17],seed:7,select:6,self:[0,3,7,9,16,17],semant:6,send:[3,10],sensibl:1,sent:6,separ:[1,6,8],sequenc:[6,15,17],sequenti:3,seri:10,servic:6,session:2,set:[3,6,7,8,17],shot:[0,5,7,11],should:14,signatur:[0,7],signific:7,significantli:[7,11],similar:[9,17],simmon:17,simpl:[16,17],simpli:[3,6],simplif:17,simplifi:[1,17],simul:[0,1,5,6,7,11],simultan:6,singl:[2,3,6,16,17],single_qubit_fidel:16,sivarajah:17,size:[3,6],small:6,softwar:6,solv:6,some:[2,3,6,16],someth:0,soon:9,sourc:8,specif:[0,1,6],specifi:[3,6],squar:16,squaregrid:[4,16],squind_to_qind:16,stack:1,stai:17,start:17,state:[0,3,5,6,7,11],state_circuit:[0,7,11],statevector:7,still:6,store:6,str:[2,3,7,9,14,15],straight:1,string:2,strip:9,structur:[0,2,6,16],style:14,subcircuit:[9,16,17],subject:16,subpackag:8,subroutin:6,subset:16,subspac:1,substitut:3,success:17,successfulli:17,suffix:2,suitabl:3,sum:[0,7,11],summari:[0,7],summary_of_quantum_oper:9,superior:6,suppli:16,support:[1,4,6,8,9,12,13,14],swap:[1,3,6,9,16],symbol:[1,2,3,14],symbol_map:3,symbol_substitut:3,sympi:[2,3],synthesis:17,system:6,tabl:[0,5,7,11],tailor:6,take:[1,6],target:[3,6],target_qubit:3,tdg:[3,9],term:[0,6,7,11],terra:[1,9],test:17,than:[1,3,6,7,11,14,17],thei:[3,6,8,17],them:[3,6,10,17],theta:9,thi:[0,2,3,6,7,8,9,10,11,14,16,17],those:6,three:16,through:3,throughout:6,time:[0,3,6,7],tk_to_cirq:4,tk_to_projectq:10,tk_to_pyquil:12,tk_to_pyzx:13,tk_to_qiskit:15,tkc:3,tkcirc:[4,12,15],tkcircuit:13,tket:[3,10,14],tketbackendengin:10,tketoptimis:10,tketpass:[1,15],to_basic_g:13,toffoli:[9,17],togeth:17,tool:[6,8],toward:17,transform:[1,6,10,17],translat:[6,10],transpil:6,tree:17,troubl:6,tupl:16,turn:[3,6],tutori:[1,9],two:[2,3,6,9,16,17],two_qubit__fidel:16,type:[0,1,3,4,5,7,9,10,11,12,13,15,16],typic:6,undirect:16,unifi:3,union:[4,10,12,13],uniqu:3,unit:3,unitari:[1,2,7,9],unitary_to_2qb_circuit:2,unitarybox:[3,9],unitid:3,until:17,untouch:3,updat:1,upgrad:6,use:[5,6,7,8,17],used:[2,8,9],useful:6,user:[9,10],using:[1,3,6,7,8,10,11,17],utilis:11,valid:14,valu:[0,4,5,7,11,16],valueerror:7,variat:6,vdg:9,vector:3,version:6,vertic:[3,16],via:[6,17],weak:0,well:6,were:17,when:[3,6],where:3,wherea:6,whether:[5,10,17],which:[3,4,6,10],while_repeat:17,whole:14,wire:[3,6],within:[1,9],without:3,work:[1,17],written:[2,6],xmon:4,xmon_devic:4,xmon_to_arc:4,xmondevic:4,xxphase:9,yet:[2,4],you:8,your:14,yyphas:9,zero:[0,7],zzphase:[3,9]},titles:["pytket.backends","Changelog","pytket._circuit","pytket._circuit.Circuit","pytket.cirq","pytket.backends.forest","Getting Started","pytket.backends.ibm","pytket","pytket._circuit.OpType","pytket.projectq","pytket.backends.projectq","pytket.pyquil","pytket.pyzx","pytket.qasm","pytket.qiskit","pytket._routing","pytket._transform"],titleterms:{"class":6,The:6,_circuit:[2,3,9],_rout:16,_transform:17,april:1,august:1,backend:[0,5,7,11],changelog:1,circuit:[3,6],cirq:4,compil:6,decemb:1,februari:1,forest:5,get:[6,8],ibm:7,indic:8,interfac:8,juli:1,june:1,march:1,optyp:9,projectq:[10,11],pyquil:12,pytket:[0,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17],pyzx:13,qasm:14,qiskit:15,start:[6,8],tabl:8}})